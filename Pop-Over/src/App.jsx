import { useState } from 'react'
import Pop from './Components/Pop'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Pop Over</h1>
      <Pop />
    </>
  )
}

export default App
