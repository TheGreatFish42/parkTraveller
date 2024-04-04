import { useState } from 'react'
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Locations from './components/Locations'
import Card from './components/Card'

function App() {

  return (
    <>
      <div className='main'>
        <nav>
          <Link to="/" style={{padding: 5}}>Home</Link>
          <Link to="/about" style={{padding: 5}}>About</Link>
          <Link to="/locations" style={{padding: 5}}>Locations</Link>
          {/* {<Link to="/card" style={{padding: 5}}>Card</Link>} */}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/locations" element={<Locations />} />
          <Route path='/locations/:locationsId' element={<Card />} />
        </Routes>
      </div>
      <footer className='footer'>
        <h4>Issues? Contact the Creator!</h4>
        <h4>email: jacobcfisher0@gmail.com</h4>
      </footer>
    </>
  )
}

export default App
