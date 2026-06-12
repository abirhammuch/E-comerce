

import express from 'express'
import authUser from '../middleware/auth.js'
import adminAuth from '../middleware/adminAuth.js'
import { placeOrderCOD ,verifyStripe, placeOrderRazorpay,placeOrderStripe, allOrders, userOrders, updateStatus} from '../controllers/orderController.js'

const orderRouter = express.Router()

// Admin features
orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateStatus)

// payment features
orderRouter.post('/cod', authUser,placeOrderCOD)
orderRouter.post('/stripe', authUser, placeOrderStripe)
orderRouter.post('/razorpay', authUser, placeOrderRazorpay)


//user features
orderRouter.post('/userorders',authUser, userOrders )

//verify

orderRouter.post('/verifyStripe', authUser, verifyStripe)



export default orderRouter