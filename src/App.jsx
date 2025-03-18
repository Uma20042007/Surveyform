import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './pages/Home'

function App() {
 

  return (
    <>
      <div className='container'>
        <Navbar/>
        <Home/>
      </div>

    </>
  )
}

export default App
