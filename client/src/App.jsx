import { useState } from 'react'
import {Home} from './page/Home';
import Login from './page/Login';
import Register from './page/Register';
import { PageOrder } from './page/Order';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/regis" element={<Register />} />
        <Route path="/home" element={<Home />} /> 
        <Route path='/order' element={<PageOrder />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
