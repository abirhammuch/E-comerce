import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { ShopContext ,} from "../../context/ShopContext";
import { Link } from "react-router-dom";



const Admin = () => {
  const {orders, products} = useContext(ShopContext)

  

  console.log(orders);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-100 p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            Welcome Admin 👋
          </h1>

          <p className="text-gray-600 text-lg">
            Manage products, orders, customers, and monitor your store
            performance from one central dashboard.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-gray-500 text-sm uppercase">
              Total Products
            </h2>
            <p className="text-3xl font-bold text-blue-600 mt-2">{products.length}</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-gray-500 text-sm uppercase">
              Total Orders
            </h2>
            <p className="text-3xl font-bold text-green-600 mt-2">{orders.length}</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-gray-500 text-sm uppercase">
              Total Users
            </h2>
            <p className="text-3xl font-bold text-purple-600 mt-2">1,250</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Dashboard Overview
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            This admin panel allows you to manage every aspect of your
            e-commerce platform. You can add new products, update inventory,
            track customer orders, and analyze store performance.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            Use the navigation menu to access product management, order
            tracking, user accounts, and sales reports. Stay informed with
            real-time updates and keep your store running smoothly.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition">
              <Link to='/admin/add'>
                Add Product
              </Link>
            </button>

            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition">
                <Link to='/admin/orders'> 
              View Orders
              </Link>
            </button>

            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition">
              <Link to='/admin/list'>
              Product List
              </Link>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500">
          <p>
            Admin Dashboard • Secure Management System • Version 1.0
          </p>
        </div>
      </div>
    </div>
  );
};

export default Admin;