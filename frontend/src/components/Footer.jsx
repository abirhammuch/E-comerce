

import React from 'react'
import { assets } from '../assets/assets/frontend_assets/assets'
import{Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <img src={assets.logo} className='mb-5 w-32 '/>
        <p className='w-full md:w-2/3 text-gray-600'>lorem textjdfjwef,k sfgkjw,ksfjs sdfkwj,kfs kshsjdfjahf,kh,ka ekfhw,kzsg kwrhtiglwhilrf wrtgjowrsuipg;ws lfjwrljlfsef,kw</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            
           <li>Home</li> 
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5 '>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
              <li>+251 973-769-266</li>
              <li>abirhammuch526@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2026 @forever.com - All right reserved</p>
      </div>
    </div>
  )
}

export default Footer
