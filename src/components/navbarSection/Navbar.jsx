import React, { useState } from 'react';

import Logo from '../../assets/logo.png';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import './navbar.scss';
import { Link} from 'react-router-dom';
import { useEffect } from 'react';
import Search from '../search/Search';
import DropdownLogin from './../Elements/DropdownLogin';
import DropdownLogout from '../Elements/DropdownLogout';
import { useCart } from '../../context/cartContext';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);
  
  const[search, setSearch] = useState(false);
  const[dropdown, setDropdown] = useState(false);

  const token = JSON.parse(sessionStorage.getItem("token")) // comming from login

  //for darkMode
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    
    if(darkMode){
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

 
  const{cartList} = useCart() //coming from context


  return (

<section className='navbar'>
       
<nav className="z-50 bg-white border-b-[0.5px] border-gray-200 dark:bg-slate-800 ">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <Link to='/' className="flex items-center">
            <img src={Logo} className="h-8 mr-2" alt="Logo" />
            <span className="self-center text-[20px] font-semibold whitespace-nowrap dark:text-white">CodeBook</span>
        </Link>
       
        <div className="flex gap-[20px] items-center dark:text-white">
              <span onClick={()=> setDarkMode(!darkMode)} className='cursor-pointer'><DarkModeIcon className='icon'/></span>
              <span onClick={()=> setSearch(!search)} className='cursor-pointer'><SearchOutlinedIcon className='icon'/></span>
             
              <Link to='/cart'>
              <div className='cursor-pointer relative inline-flex items-center text-sm font-medium text-center'>
                <LocalGroceryStoreIcon className='icon '/>
                <span className="absolute inline-flex items-center justify-center w-4 h-4 text-[10px] p-2 text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">{cartList.length}</span>
                </div>

              </Link>

              <span onClick={()=>setDropdown(!dropdown)} className='cursor-pointer'><AccountCircleOutlinedIcon className='icon'/></span>

              <div className="z-50 dropdow absolute top-[50px] right-5 xl:right-[50px]">
                { dropdown && ( token? <DropdownLogin setDropdown={setDropdown}/> : <DropdownLogout setDropdown={setDropdown}/>)  } 
               
              </div>
        </div>
    </div>

</nav>
{
  search && <Search setSearch={setSearch}/>
}

    </section>
  )
}

export default Navbar