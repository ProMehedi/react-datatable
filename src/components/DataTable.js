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
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.username}</td>
              <td>{row.email}</td>
              <td>{row.address.city}</td>
              <td>{row.phone}</td>
              <td>{row.website}</td>
              <td>{row.company.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default DataTable
