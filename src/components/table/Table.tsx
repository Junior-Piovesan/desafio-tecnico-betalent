import { useEffect, useState } from 'react';
import styles from './table.module.css';
import TableMobile from '../tableMobile/TableMobile';
import TableWeb from '../tableWeb/TableWeb';
import { getEmployees } from '../../services/fetch';

type TableProps = {
  searchInput: string;
};

export default function Table({ searchInput }:TableProps) {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    const data = await getEmployees();
    setEmployees(data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <section className={ styles.tableContainer }>
      <div className={ styles.mobileContainer }>
        <TableMobile employees={ employees } searchInput={ searchInput.toLowerCase() } />
      </div>

      <div className={ styles.webContainer }>
        <TableWeb employees={ employees } searchInput={ searchInput.toLowerCase() } />
      </div>

    </section>
  );
}
