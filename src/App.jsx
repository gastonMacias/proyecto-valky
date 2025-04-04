import { useState } from 'react'

import './App.css'

import Navbar from './components/navbar/Navbar'
import Carrousel from './components/carrousel/Carrousel'
import Productos from './components/productos/Productos'
import Footer from './components/footer/Footer'




function App() {

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Carrousel />
      <Productos searchTerm={searchTerm} />
      <Footer />
    </>
  )
}

export default App
