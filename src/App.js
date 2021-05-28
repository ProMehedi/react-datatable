import React, { useEffect, useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import DataTable from './components/DataTable'
import users from './users.json'

const App = () => {
  const [data, setData] = useState([])
  const [query, setQuery] = useState('')
  const [filters, setFilters] = useState(['name', 'email'])

  useEffect(() => {
    // const getUsers = async () => {
    //   try {
    //     const reqData = await fetch(
    //       'https://jsonplaceholder.typicode.com/users'
    //     )
    //     const resData = await reqData.json()
    //     setData(resData)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
    // getUsers()
    setData(users)
  }, [])

  const searchTable = (rows) => {
    return rows.filter((row) =>
      filters.some(
        (column) =>
          row[column].toString().toLowerCase().indexOf(query.toLowerCase()) > -1
      )
    )
  }

  const columns = data[0] && Object.keys(data[0])

  return (
    <Container>
      <h2 className='my-5 text-center'>Data-Table with ReactJS</h2>
      <div className='mb-3'>
        <Form.Control
          className='mb-1'
          placeholder='Search here...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className='d-flex'>
          {columns &&
            columns.map((column, index) => (
              <Form.Check
                key={index}
                className='me-3 text-capitalize'
                type='checkbox'
                label={column}
                checked={filters.includes(column)}
                id={column}
                onChange={(e) => {
                  const checked = filters.includes(column)
                  setFilters((prev) =>
                    checked
                      ? prev.filter((sc) => sc !== column)
                      : [...prev, column]
                  )
                }}
              />
            ))}
          {/* <Form.Check type="checkbox" label="Check me out" /> */}
        </div>
      </div>
      <DataTable data={searchTable(data)} />
    </Container>
  )
}

export default App
