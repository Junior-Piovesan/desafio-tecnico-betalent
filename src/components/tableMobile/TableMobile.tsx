import React, { useState } from 'react';
import { Employee } from '../../types/emplyeeType';
import { formatDate } from '../../services/formatDate';

import styles from './tableMobile.module.css';

import down from '../../assets/arrow-down.png';
import up from '../../assets/arrow-up.png';
import { formatPhoneNumber } from '../../services/formatPhoneNumber';

type TableMobileProps = {
  employees: Employee[]
  searchInput: string
};

export default function TableMobile({ employees, searchInput }:TableMobileProps) {
  const [showInfo, setShowInfo] = useState('');

  const handlesEmployeeInfo = (id:string) => {
    if (id === showInfo) {
      setShowInfo('');
    } else {
      setShowInfo(id);
    }
  };

  return (
    <table className={ styles.emplyeetableMobile }>
      <thead>
        <tr className={ styles.tableRow }>
          <th className={ styles.tableCell }>Foto</th>
          <th className={ styles.tableCellDouble }>
            Nome
            <div className={ styles.circle }>d</div>
          </th>

        </tr>
      </thead>

      <tbody className={ styles.tableBody }>
        { employees
          .filter((employee) => employee.name.toLowerCase().includes(searchInput)
          || employee.job.toLowerCase().includes(searchInput)
          || employee.phone.includes(searchInput)).map((employee) => (
            <React.Fragment key={ employee.id }>
              <tr className={ styles.tableRowInfo }>
                <td className={ styles.tableCellImage }>
                  <img
                    src={ employee.image }
                    alt="imagem do funcionário"
                    className={ styles.employeePhoto }
                  />
                </td>
                <td className={ styles.employeeCellInfoDouble }>
                  { employee.name }

                  <button
                    onClick={ () => handlesEmployeeInfo(employee.id) }
                  >
                    <img
                      className={ styles.arrows }
                      src={ showInfo === employee.id ? up
                        : down }
                      alt="Arrow down"
                    />
                  </button>
                </td>
              </tr>
              {showInfo === employee.id
            && (
              <>
                <tr className={ styles.TableRowDropOne }>
                  <td className={ styles.tableCellInfoTitle }>
                    Cargo
                  </td>
                  <td className={ styles.tableCellInfoContent }>
                    { employee.job }
                  </td>
                  <td />
                </tr>

                <tr className={ styles.TableRowDrop }>
                  <td className={ styles.tableCellInfoTitle }>
                    Data de admissão
                  </td>
                  <td className={ styles.tableCellInfoContent }>
                    { formatDate(employee.admission_date) }
                  </td>
                  <td />
                </tr>

                <tr className={ styles.TableRowDrop }>
                  <td className={ styles.tableCellInfoTitle }>
                    Telefone
                  </td>
                  <td className={ styles.tableCellInfoContent }>
                    { formatPhoneNumber(employee.phone) }
                  </td>
                  <td />
                </tr>
              </>
            )}

            </React.Fragment>
          ))}
      </tbody>
    </table>

  );
}
