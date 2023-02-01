import React from 'react'
 import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import Register from './Pages/Register'

import CreateProduct from './Pages/CreateProduct'
 import ProductAdmin from './Pages/ProductAdmin'
const App = () => {
  return (
    <div> 
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/register' element={<Register/>} />
      
        <Route path='/createproduct' element={<CreateProduct/>} />
        <Route path='/adminproduct' element={<ProductAdmin/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App