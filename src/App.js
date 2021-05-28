import React, { useEffect, useState } from 'react'

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

  console.log(data)

  return (
    <div>
      <h1>Hello!</h1>
    </div>
  )
}

export default App
