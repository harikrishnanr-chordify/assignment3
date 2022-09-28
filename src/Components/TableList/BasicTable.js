import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import SAMPLE_DATA from './Sample.json';

const COLUMNS = [
  {
    Header: 'ID',
    accessor: 'id'
  },
  {
    Header: 'First Name',
    accessor: 'first_name'
  },
  {
    Header: 'Last Name',
    accessor: 'last_name'
  },
  {
    Header: 'Email',
    accessor: 'email'
  },
  {
    Header: 'Gender',
    accessor: 'gender'
  }
]

const BasicTable = () => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => SAMPLE_DATA, [])

  const tableInstance = useTable({
    columns: columns,
    data: data
  });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = tableInstance

  return (
    <div>
      <h5>
        TableList
      </h5>

      <table {...getTableProps()}>
        <thead>
          {
            headerGroups.map((headerGroup) => {
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  headerGroup.headers.map((column) => {
                    <th {...column.getHeaderProps()}>
                      {
                        column.render('Header')
                      }
                    </th>
                  })}
              </tr>
            })
          }
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody {...getTableBodyProps()}>
          {
            rows.map(row => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {
                    row.cells.map((cell) => {
                      return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    })
                  }
                </tr>
              )
            })
          }

        </tbody>
      </table>
    </div>
  )
}

export default BasicTable;