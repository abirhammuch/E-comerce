
import axios from 'axios';
import React, { useContext } from 'react'
import { assets } from '../../assets/assets/admin_assets/assets';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ShopContext } from '../../context/ShopContext';

const SellerLayout = () => {

    const {setIsAdmin,  navigate, setAdminToken, adminToken} = useContext(ShopContext)

    


    const sidebarLinks = [
        { name: "Add Product", path: "/admin/add", icon: assets.add_icon },
        { name: "Product List", path: "/admin/list", icon: assets.order_icon },

        { name: "Orders", path: "/admin/total-orders", icon: assets.order_icon },
    ];

    const logout = async ()=>{
      try {
        
            
            setAdminToken('');
            setIsAdmin(false)
           localStorage.removeItem("adminToken");
            
         
            
       
      } catch (error) {
        toast.error(error.message)
      }

     
    }
   

    return (
        <>
            <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white ">
                <Link to='/'>
                   <img src={assets.logo} alt='logo' className='cursor-pointer w-34 md:w-38' />
                </Link>
                <div className="flex items-center gap-5 text-gray-500">
                    <p>Hi! Admin</p>
                    <button onClick={logout} className='border rounded-full text-sm px-4 py-1 cursor-pointer'>Logout</button>
                </div>
            </div>
            <div className='flex'>
              <div className="md:w-64 w-16 border-r h-[95vh] text-base border-gray-300 pt-4 flex flex-col ">
                {sidebarLinks.map((item, index) => (
                    <NavLink to={item.path} key={item.name} end={item.path === '/admin'}
                        className={({isActive}) =>`flex items-center py-3 px-4 gap-3 
                            ${isActive ? "border-r-4 md:border-r-[6px] bg-primary/10 border-primary text-primary bg-amber-200"
                                : "hover:bg-gray-100/90 border-white "
                            }`
                        }
                    >
                        <img src={item.icon} alt='' className='w-7 h-7'/>
                        <p className="md:block hidden text-center">{item.name}</p>
                    </NavLink>
                ))}
            </div>
            <Outlet />
            </div>
        </>
    );
};
export default SellerLayout
