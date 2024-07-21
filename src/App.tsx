import { ChangeEvent, useState } from 'react';
import Table from './components/table/Table';
import Header from './components/header/Header';
import SearchBar from './components/searchBar/SearchBar';

import './app.css';

function App() {
  const [search, setSearch] = useState('');

  const handleSearch = ({ target: { value } }:ChangeEvent<HTMLInputElement>) => {
    setSearch(value);
  };

  return (
    <div className="globalContainer">
      <Header />
      <SearchBar searchInput={ search } handleSearch={ handleSearch } />
      <Table searchInput={ search } />
    </div>
  );
}

export default App;
