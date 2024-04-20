import { useState } from 'react'
import Navbar from './components/Navbar'
import Maincontent from './components/Maincontent'
import Contact from './components/Contact'
import Body from './components/Body'
import Home from './components/Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
      {/* <Maincontent/> */}
      <Contact/>
      <Body/>
    </>
  )
}

export default App
