import search from '../../assets/search.png';

import styles from './searchBar.module.css';

type SearchBarProps = {
  searchInput: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchBar({ searchInput, handleSearch }:SearchBarProps) {
  return (
    <section className={ styles.searchBarContainer }>
      <h1 className={ styles.title }>Funcionários</h1>

      <label className={ styles.searchContainer } htmlFor="search">
        <input
          type="text"
          id="search"
          placeholder="Pesquisar"
          className={ styles.inputSearch }
          value={ searchInput }
          onChange={ handleSearch }
        />
        <img src={ search } alt="pesquisar" className={ styles.imgSearch } />
      </label>
    </section>
  );
}
