import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Steps from './steps'
import Stepper from './stepper'

function App() {

  return (
    <>
  <Stepper steps={Steps}/>
    </>
  )
}

export default App
