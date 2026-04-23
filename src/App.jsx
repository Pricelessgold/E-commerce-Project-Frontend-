import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Cart from './components/Cart'
import Products from './components/Products'

const App = () => { 
  return (
    <Router>
      <Header title="LebenPro" />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  )
  
}

export default App