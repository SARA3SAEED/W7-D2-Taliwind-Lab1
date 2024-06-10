import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav></Nav>
      <Header></Header>
      <div className="div-card flex flex-wrap	justify-center	">
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
