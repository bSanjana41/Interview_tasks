import { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState([])

  const fetchData = async () => {
    const Users = await fetch("https://dummyjson.com/users")
    const res = await Users.json()
    setData(res.users)
    console.log(res.users)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div>
        <h1>User Details</h1>

        <table>
          <thead>
            <tr>
              <th>S no.</th>
              <th>Full Name</th>
              <th>Gender</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user,i) => (
              <tr key={user.id} >
                <td>{i+1}</td> 
                <td>{user.firstName}{user.lastName}</td>
                <td>{user.gender}</td>
                <td>{user.age}</td>
                </tr>
            ))}

          </tbody>
        </table> 
          </div>
    </>
  )
}

export default App
