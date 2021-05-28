import React from 'react'
import { Table } from 'react-bootstrap'

const DataTable = ({ data }) => {
  const columns = data[0] && Object.keys(data[0])
  return (
    <>
      <Table striped bordered hover className='pm-dataTable'>
        <thead>
          <tr>
            {data[0] &&
              columns.map((heading) => (
                <th key={heading} className='text-capitalize'>
                  {heading}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.length > 0 &&
            data.map((row) => (
              <tr key={row.id}>
                {columns.map((column, index) => (
                  <td key={index}>{row[column]}</td>
                ))}
              </tr>
            ))}
          {data && data.length === 0 && (
            <tr>
              <td>
                <div className='py-5 text-center'>
                  <h1>Sorry! Nothing Found! :(</h1>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  )
}

export default DataTable
