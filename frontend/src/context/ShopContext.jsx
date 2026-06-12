import { createContext, useEffect, useState } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ShopContext = createContext();

export const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  
  
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [ products, setProducts] = useState([])
  const [userToken, setUserToken] = useState('')
   const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  const [adminToken, setAdminToken] = useState('');

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    if (token) {
      setAdminToken(token);
      setIsAdmin(true);
    }
  }, []);



  const addToCart = async (itemId, size) => {
    let cartData = structuredClone(cartItems);

    if (!size) {
      toast.error("Select Product Size");
      return;
    }
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
    if(userToken){
      try {
        
        
        await axios.post(backendUrl + '/api/cart/add' , {itemId, size}, {headers:{userToken}})
        toast.success('Added To Cart')
       
      } catch (error) {
        console.log(error);
        toast.error(error.message)
        
      }
    }


  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalCount;
  };

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);

    cartData[itemId][size] = quantity;

    setCartItems(cartData);

    if(userToken){
      try {
        
        
        await axios.post(backendUrl + '/api/cart/update' , {itemId, size, quantity}, {headers:{userToken}})
       
       
      } catch (error) {
        console.log(error);
        toast.error(error.message)
        
      }
    }
  };

  const getCartAmount = () => {
    let totalAmoount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmoount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalAmoount;
  };


  const getProductsData = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/admin/list")
      
      if (response.data.success) {
        setProducts(response.data.products)
      }
      else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
      
    }
  }


  const getUserCart = async (userToken) => {
    
    
    try {
      const response =  await axios.post(backendUrl + '/api/cart/get' , {}, {headers:{userToken}})
      
      
    if (response.data.success) {
      setCartItems(response.data.cartData)
    }
    } catch (error) {
       console.log(error);
      toast.error(error.message)
    }
  }

  useEffect(()=> {
    getProductsData()
  }, [])

  useEffect(()=>{
    if (!userToken && localStorage.getItem('userToken')) {
      setUserToken(localStorage.getItem('userToken'))
      getUserCart(localStorage.getItem('userToken'))
    }
  }, [])

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,setCartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    isAdmin,
    setIsAdmin,
    adminToken,
    setAdminToken,
    backendUrl,
    userToken, setUserToken,
    orders, setOrders
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
