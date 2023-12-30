import React from 'react'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import About from './pages/About'
import Offers from './pages/Offers'
import SignIn from './pages/SignIn'
import Signup from './pages/Signup'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/offers' element={<Offers/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/signin' element={<SignIn/>}/>
    <Route path='/profile' element={<SignIn/>}/>

    </Routes>
    
    </BrowserRouter>
    
    
  
    </>
  )
}

export default App