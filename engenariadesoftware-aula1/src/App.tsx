import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import nome from './calculo'

function App() {

  const n = nome()

  return (
    <>
      <img src={reactLogo} className='logo'></img>
      <input type='text' value={n} />
    </>
  )
}

export default App
