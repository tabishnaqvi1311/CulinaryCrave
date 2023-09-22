import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './Pages/Landing'
import Recipes from './Pages/Recipes'
import Search from './Pages/Search'
import Footer from './components/Footer'
import RecipeDetail from './Pages/RecipeDetail'
import './App.css'
import Login from './Pages/Login'
import Signup from './Pages/Signup'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Landing/>}/>
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/recipes/:id' element={<RecipeDetail />} />
        <Route path='/search/:query' element={<Search/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App