# Desafio Técnico Be

O desafio técnico Be consiste em desenvolver uma tabela de funcionários alimentada por uma API simulada. Deve ser possível filtrar os funcionários por seu nome, cargo ou telefone.

## Requisitos

<details>
    <summary><strong>Requisito-1</strong></summary>
    Deve ser desenvolvido um cabeçalho para a aplicação, nele deve conter o logo da empresa Be.
</details>
<br/>
<details>
    <summary><strong>Requisito-2</strong></summary>
    A página deve conter um título "Funcionários" e, ao lado, um input que será responsável pela entrada de dados para serem usados nos filtros.
</details>
<br/>
<details>
    <summary><strong>Requisito-3</strong></summary>
    Desenvolva uma função para fazer uma requisição para a API simulada no endpoint:

      http://localhost:3000/employees
    
</details>
<br/>
<details>
    <summary><strong>Requisito-4</strong></summary>
    Com os dados em mãos, desenvolva o quadro de funcionários.
</details>
<br/>
<details>
    <summary><strong>Requisito-5</strong></summary>
    Crie uma função para formatar a data que precisa estar no seguinte formato: "00/00/0000".
</details>
<br/>
<details>
    <summary><strong>Requisito-6</strong></summary>
    Crie uma função para formatar o número de telefone do funcionário que precisa estar no seguinte formato: "+55 (55) 55555-5555".
</details>
<br/>
<details>
    <summary><strong>Requisito-7</strong></summary>
    Crie a funcionalidade de filtrar os funcionários através do nome, cargo ou telefone.
</details>

## 🧭 Orientações

<details>
    <summary><strong>🛠️ Guia de Instalação e Execução.</strong></summary>

* Clone o repositório em sua máquina.

* Na pasta raiz, instale as dependências com o comando:

      npm install

* Ainda no mesmo terminal, execute o seguinte comando para iniciar a API simulada:

      npx json-server db.json

  ### Obs: O terminal deve permanecer executando e certifique-se de que a porta 3000 esteja livre.

* Abra um novo terminal e execute o seguinte comando para rodar o front-end da aplicação:

      npm run dev

  ### Obs: O terminal deve permanecer executando.

  ### Pronto! A aplicação está rodando.

</details>
<br/>
<details>
    <summary><strong>🧪 Executando os Testes</strong></summary>
    
* Para rodar os testes, é preciso já ter instalado as dependências e estar na pasta raiz do projeto. Feito isso, execute o seguinte comando no terminal:

      npm test 

</details>

## 📦 Tecnologias Usadas:

* ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
* ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
* ![testingLibrary](https://img.shields.io/badge/testing%20library-323330?style=for-the-badge&logo=testing-library&logoColor=red)

## 🧑‍🔧 Autores

* Desenvolvimento do layout, funcionalidades e testes - [Junior Piovesan](https://github.com/Junior-Piovesan)
