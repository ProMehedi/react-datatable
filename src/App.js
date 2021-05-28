import React, { useEffect, useState } from 'react'
import DataTable from './components/DataTable'

const App = () => {
  const [data, setData] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    const getUsers = async () => {
      try {
        const reqData = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        )
        const resData = await reqData.json()
        setData(resData)
      } catch (error) {
        console.log(error)
      }
    }
    getUsers()
  }, [])

  return (
    <>
      <h1>Data Table with ReactJS</h1>
      <DataTable data={data} />
    </>
  )
}

export default App
