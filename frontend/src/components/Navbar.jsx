

import React, { useContext, useState } from 'react'
import { NavLink , Link } from 'react-router-dom'
import { Search, User, ShoppingCart } from 'lucide-react'
import { MenuIcon } from 'lucide-react'
import { ClosedCaptionIcon } from 'lucide-react'
import { assets } from '../assets/assets/frontend_assets/assets'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {

  const [visible , setVisible] = useState(false)
  const { setShowSearch, getCartCount , navigate, userToken, setUserToken , setCartItems} = useContext(ShopContext)

  const logout = () => {
    localStorage.removeItem('userToken')
    setUserToken('')
    setCartItems({})
    navigate('/login')
  }
  return (
    <div className='flex items-center justify-between h-[70px]  px-5 border-b-1 border-gray-200 '>
      <Link to={'/'} className='cursor-pointer'>
      <img src={assets.logo} className='w-36' />
      </Link>

      <ul className='hidden md:flex gap-4 '>
          <NavLink to='/' className='flex flex-col justify-center gap-1 items-center'>
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 flex hidden'></hr>
          </NavLink>
          <NavLink to='/collection' className='flex flex-col justify-center gap-1 items-center'>
            <p>COLLECTION</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 flex  hidden'></hr>
          </NavLink>
          <NavLink to='/about' className='flex flex-col justify-center gap-1 items-center '>
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 flex items-center hidden'></hr>
          </NavLink>
          <NavLink to='/contact' className='flex flex-col justify-center gap-1 items-center'>
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 flex hidden '></hr>
          </NavLink>
      </ul>


      <div className='flex items-center gap-6'>
        <Search onClick={()=>setShowSearch(true)} className='w-5 cursor-pointer'/>
        <div className='group relative'>
          
          <User onClick={() => userToken ? null : navigate('/login')} className='w-5 cursor-pointer'/>

         {userToken &&
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-2 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
              <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
          }
        </div>
        <Link to='/cart' className='relative'>
          <ShoppingCart className='w-5 cursor-pointer'/>
          <div className='  absolute right-[-10px] top-[-7px] bg-black rounded-full w-5 h-5 flex items-center justify-center text-white'>{getCartCount()}</div>
        </Link>

          <MenuIcon onClick= {()=>setVisible(true)}  className='flex md:hidden cursor-pointer'/>
        
        {/* side var for mobile view */}
        <div className={`absolute top-0 bottom-0 right-0  overflow-hidden bg-white transition-all ${visible ? 'w-full': 'w-0'}`}>

          <div className='flex flex-col text-gray-600'>
            <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
             
              <ClosedCaptionIcon  className='h-4 rotate-180'/>
              <p>Back</p>
            </div>
            <NavLink  onClick={()=>setVisible(false)} className= 'py-2 pl-6 border' to ='/'>HOME</NavLink>
            <NavLink onClick={()=>setVisible(false)} className= 'py-2 pl-6 border' to ='/collection'>COLLECTION</NavLink>
            <NavLink onClick={()=>setVisible(false)} className= 'py-2 pl-6 border' to ='/about'>ABOUT</NavLink>
            <NavLink onClick={()=>setVisible(false)} className= 'py-2 pl-6 border' to ='/contact'>CONTACT</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
