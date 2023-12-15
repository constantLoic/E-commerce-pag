
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'

function App() {


  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
