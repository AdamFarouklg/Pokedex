import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App';
import PokeCardInfo from './PokeCardInfo';
import SearchBar from './SearchBar';
import Footer from './Footer';
import { AiFillDownCircle, AiFillUpCircle } from 'react-icons/ai'
import ParentFilter from './Filter';

const Main = () => {
  return (
    <div>
      <Router>
        <div id="top"></div>
        <nav id="navbar">
          <h1>Pokedex</h1>           
        </nav>
        <div>
          <SearchBar />
        </div>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/cardinfo' element={<PokeCardInfo />} />
          <Route path='/filter' element={<ParentFilter />} /> 
        </Routes>
        <Footer />
      </Router>

    </div>
  )
}

export default Main;