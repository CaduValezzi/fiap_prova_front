import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './assets/css/default.css';

import { Sobre } from './pages/sobre'


function App () {
  return(
    <Router>
      <Routes>
        <Route path="/" element={
          <Sobre/>
        }/>
        <Route path="/index" element={
          <Sobre/>
        }/>
        <Route path="*" element={
          <Sobre/>
        }/>
      </Routes>
    </Router>
  )
}

export default App;


