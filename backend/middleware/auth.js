

import jwt from 'jsonwebtoken'

const authUser = async (req , res , next) => {
   
  const { usertoken } = req.headers;
  
  
  
  
  if (!usertoken) {
    return res.json({success: false, message: 'Not Authorized Login Again...'})
    
  }
  try {
   
    const token_decode = jwt.verify(usertoken, process.env.JWT_SECRET)
    req.body.userId = token_decode.id
    
    next()
  } catch (error) {
    console.log('no');
    
    console.log(error);
    res.json({success:false, message:error.message})
    
    
  }
}

export default authUser