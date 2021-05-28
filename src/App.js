import React, { useEffect, useState } from 'react'
import { Container, FormControl } from 'react-bootstrap'
import DataTable from './components/DataTable'
import users from './users.json'

const App = () => {
  const [data, setData] = useState([])
  const [query, setQuery] = useState('')

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
    const columns = data[0] && Object.keys(data[0])
    return rows.filter((row) =>
      columns.some(
        (column) => row[column].toString().toLowerCase().indexOf(query) > -1
      )
    )
  }

  return (
    <Container>
      <h2 className='my-5 text-center'>Data-Table with ReactJS</h2>
      <div className='mb-3'>
        <FormControl
          placeholder='Search here...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <DataTable data={searchTable(data)} />
    </Container>
  )
}

export default App
