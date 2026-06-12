import React, { useContext, useState, useEffect } from "react";

import axios from "axios";
import { ShopContext } from "../../context/ShopContext";
import { toast } from "react-toastify";



const AdminLogin = () => {

  const { backendUrl } = useContext(ShopContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAdminToken, adminToken, setIsAdmin, navigate , isAdmin} =
    useContext(ShopContext);

  

 const onSubmitHandler = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      backendUrl + "/api/user/admin",
      {
        email,
        password,
      }
    );

    if (response.data.success) {
      setAdminToken(response.data.token);
      localStorage.setItem("adminToken", response.data.token);
      setIsAdmin(true);

      navigate('/admin');
    } else {
      toast.error(response.data.message);
    }
  } catch (error) {
    console.log(error);
    toast.error(error.response?.data?.message || error.message);
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-700 mb-2 ">
              Email Address
            </p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none"
              type="email"
              placeholder="your@gmail.com"
              required
            />
          </div>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-700 mb-2 ">Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none"
              type="password"
              placeholder="password"
              required
            />
          </div>
          <button
            className="mt-2 w-full py-2 px-4 rounded-md text-white bg-black"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
