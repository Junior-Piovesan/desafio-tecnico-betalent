import { render, screen, waitFor, act } from '@testing-library/react';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import logo from '../assets/logo.png';
import { employeesMock } from './mocks/employeesMock';
import App from '../App';

global.fetch = vi.fn(() => Promise.resolve({
  json: () => Promise.resolve(employeesMock),
}) as Promise<Response>);

describe('Testando os componentes renderizados no arquivo App', () => {
  afterEach(() => vi.clearAllMocks());

  it('Testa se uma tag "header" e uma "img" são renderizados na página', async () => {
    await act(async () => {
      render(<App />);
    });

    const header = screen.getByRole('banner');
    const img = screen.getByAltText('logo');

    expect(header).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', logo);
  });

  it('Verifica se os nomes das colunas estão corretos', async () => {
    await act(async () => {
      render(<App />);
    });

    await waitFor(() => {
      const foto = screen.getByRole('columnheader', { name: /foto/i });
      const nome = screen.getByRole('columnheader', { name: /nome/i });
      const cargo = screen.getByRole('columnheader', { name: /cargo/i });
      const dataAdmissao = screen.getByRole('columnheader', { name: /data de admissão/i });
      const telefone = screen.getByRole('columnheader', { name: /telefone/i });

      expect(foto).toBeInTheDocument();
      expect(nome).toBeInTheDocument();
      expect(cargo).toBeInTheDocument();
      expect(dataAdmissao).toBeInTheDocument();
      expect(telefone).toBeInTheDocument();
    });
  });

  it('Verifica se o conteúdo da tabela está sendo renderizado', async () => {
    await act(async () => {
      render(<App />);
    });

    await waitFor(() => {
      const nameJoao = screen.getByAltText('João');
      const nameRoberto = screen.getByAltText('Roberto');
      const nameMaria = screen.getByAltText('Maria');

      expect(nameJoao).toBeInTheDocument();
      expect(nameRoberto).toBeInTheDocument();
      expect(nameMaria).toBeInTheDocument();
    });
  });

  it('Verifica se o filtro esta filtrando por nome', async () => {
    await act(async () => {
      render(<App />);
    });

    const input = screen.getByRole('textbox', { name: /pesquisar/i });

    await act(async () => {
      await userEvent.type(input, 'joão');
    });

    await waitFor(() => {
      const rows = screen.getAllByRole('row');

      expect(rows.length).toEqual(2);
    });
  });

  it('Verifica se o filtro esta filtrando por cargo', async () => {
    await act(async () => {
      render(<App />);
    });

    const input = screen.getByRole('textbox', { name: /pesquisar/i });

    await act(async () => {
      await userEvent.type(input, 'back-end');
    });

    await waitFor(() => {
      const rows = screen.getAllByRole('row');

      expect(rows.length).toEqual(2);
    });
  });

  it('Verifica se o filtro esta filtrando por telefone', async () => {
    await act(async () => {
      render(<App />);
    });

    const input = screen.getByRole('textbox', { name: /pesquisar/i });

    await act(async () => {
      await userEvent.type(input, '5557894561230');
    });

    await waitFor(() => {
      const rows = screen.getAllByRole('row');

      expect(rows.length).toEqual(2);
    });
  });
});
