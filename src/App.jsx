import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Productos from './components/productos/Productos'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Productos />
      <Footer />
    </>
  )
}

export default App
