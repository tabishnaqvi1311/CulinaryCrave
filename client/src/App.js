import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './Pages/Landing'
import Recipes from './Pages/Recipes'
import Footer from './components/Footer'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Landing/>}/>
        <Route path='/recipes' element={<Recipes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App