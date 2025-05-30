import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StarRating from './components/StarRating'
import HalfStarRating from './components/HalfStarRating'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <p>Ratings Widget</p>
    <HalfStarRating/>
    </>
  )
}

export default App
