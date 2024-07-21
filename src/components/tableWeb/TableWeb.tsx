import styles from './tableWeb.module.css';

import { Employee } from '../../types/emplyeeType';
import { formatDate } from '../../services/formatDate';
import { formatPhoneNumber } from '../../services/formatPhoneNumber';

type TableWebProps = {
  employees: Employee[],
  searchInput: string;

};

export default function TableWeb({ employees, searchInput }:TableWebProps) {
  return (
    <table className={ styles.employeeTable }>
      <thead className={ styles.employeeTableHeader }>
        <tr>
          <th className={ styles.employeeTableCell }>Foto</th>
          <th className={ styles.employeeTableCell }>Nome</th>
          <th className={ styles.employeeTableCell }>Cargo</th>
          <th className={ styles.employeeTableCell }>Data de admissão</th>
          <th className={ styles.employeeTableCell }>Telefone</th>
        </tr>
      </thead>
      <tbody>
        { employees
          .filter((employee) => employee.name.toLowerCase().includes(searchInput)
            || employee.job.toLowerCase().includes(searchInput)
            || employee.phone.includes(searchInput)).map((employee) => (
              <tr key={ employee.id } className={ styles.employeeTableRow }>
                <td className={ styles.employeeTableCell }>
                  <img
                    src={ employee.image }
                    alt={ employee.name }
                    className={ styles.employeePhoto }
                  />
                </td>
                <td className={ styles.employeeTableCell }>{ employee.name }</td>
                <td className={ styles.employeeTableCell }>{ employee.job }</td>
                <td
                  className={ styles.employeeTableCell }
                >
                  { formatDate(employee.admission_date) }
                </td>
                <td className={ styles.employeeTableCell }>
                  { formatPhoneNumber(employee.phone) }
                </td>
              </tr>
          ))}
      </tbody>
    </table>
  );
}
