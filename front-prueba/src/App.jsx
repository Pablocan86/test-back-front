import { useEffect, useState } from 'react'
import './App.css'
import { getUsers } from './api';

function App() {
const [users,setUsers] = useState()

useEffect(() => {
  getUsers()
      .then(response => setUsers(response.data))
      .catch(error => console.error(error));
}, [])


  return (
    <>
       <div>
      <h1>Lista de usuarios</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.firstName} (ID: {user.id})</li>
        ))}
      </ul>
     
    </div>
    </>
  )
}

export default App
