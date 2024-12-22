import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Button } from 'bootstrap'
import Button from 'react-bootstrap/Button'
import Home from './components/Home'
import Footer from './components/Footer'
import RegisterPage from './components/RegisterPage'
import LoginPage from './components/LoginPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='root'>
      <Navbar />
     {/* <Home />*/}
      {/*<RegisterPage />*/}
      <LoginPage /> 
      <Footer />
    </div>
      
    
  )
}

export default App
