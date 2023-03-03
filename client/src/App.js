// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home'
import Categories from './Pages/Categories/Categories'
import RecipeListing from './Pages/RecipeListing/RecipeListing'
import Blog from './Pages/Blog/Blog'

const App = () => (
      <BrowserRouter>  
        <Navbar />
        <Routes>
          Hello
          <Route path='/' exact element={<Home />} />
          <Route path='/recipeListing' element={<RecipeListing />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/blog' element={<Blog />} />
        </Routes> 
        <Footer />
      </BrowserRouter>
  );


export default App;
