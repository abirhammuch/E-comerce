

import React, { useContext } from 'react'

import {Routes, Route, useLocation} from 'react-router-dom'
import  Home  from './pages/Home'

import  About  from './pages/About'
import  Contact  from './pages/Contact'
import  Cart  from './pages/Cart'
import  PlaceOrder  from './pages/PlaceOrder'
import  Product  from './pages/Product'
import  Login  from './pages/Login'
import  Orders  from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CollectionPage from './pages/CollectionPage'
import Searchbar from './components/Searchbar'
import { ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ShopContext } from './context/ShopContext'
import AdminNavbar from './components/AdminNavbar'
import Add from './pages/adminPages/Add'
import AdminLayout from './pages/adminPages/AdminLayout'
import List from './pages/adminPages/List'
import TotalOrders from './pages/adminPages/TotalOrders'
import AdminLogin from './pages/adminPages/AdminLogin'
import Verify from './pages/Verify'
import Admin from './pages/adminPages/admin'





const App = () => {
  
  const isAdminPath = useLocation().pathname.includes('admin')
  const { isAdmin } = useContext(ShopContext)
  
 
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]' >

       <ToastContainer />
       {
        isAdminPath ? '' :<Navbar />
       }
        
        <Searchbar />
      <Routes >
          <Route path='/' element={<Home/>} />
          <Route path='/collection' element={<CollectionPage/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/product/:productId' element={<Product/>} />
          <Route path='/place-order' element={<PlaceOrder/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/orders' element={<Orders/>} />
          <Route path='/verify' element={<Verify/>} />
          <Route path='/admin' element={isAdmin ? <AdminLayout />: <AdminLogin/>} >

            <Route path='add' element={isAdmin ? <Add /> : null}/>
            <Route path='list' element={isAdmin ? <List /> : null} />
            <Route path='total-orders' element ={<TotalOrders />} />
            <Route path='/admin' element ={<Admin/>} />
          </Route>
          

          
      </Routes>
      {isAdminPath ? '' : <Footer />}
     
    </div>
  )
}

export default App
