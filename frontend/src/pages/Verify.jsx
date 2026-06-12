

import React, { useContext, useEffect } from 'react'
import {ShopContext}  from '../context/ShopContext'
import { useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

const Verify = () => {

  const { navigate, userToken, setCartItems, backendUrl} = useContext(ShopContext)
  const [searchParams, setSearchParams] = useSearchParams()

  const usertoken = userToken

  const success = searchParams.get('success')
  const orderId = searchParams.get('orderId')


  const verifyPayment = async () => {
    try {
      if (!usertoken) {
        return null
      }

      
      

      const response = await axios.post(backendUrl + '/api/order/verifyStripe',{success,orderId}, {headers:{usertoken}})
      console.log(response);
      

      if (response.data.success) {
        setCartItems({})
        navigate('/orders')
      }
      else{
        navigate('/cart')
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.message)
      
    }
  }
  useEffect(() => {
    verifyPayment()
  } , [usertoken])

  return (
    <div>
      
    </div>
  )
}

export default Verify
