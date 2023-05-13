import React, { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import { logout } from '../../services/authService'
import { useEffect } from 'react';
import { getUser } from '../../services/dataService';


const DropdownLogin = ({setDropdown}) => { //setDropdown coming from DropdownLogin and logout

  const [user, setUser] = useState({})
  const naviget = useNavigate()


  useEffect(() => {
    const fetchData = async()=>{
     
        const data = await getUser();
        data.email ? setUser(data) : handelLogout();
      
      
    }
    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  
  const handelLogout = () => {
    logout()//coming from 'services/authService'
    setDropdown(false);
    naviget("/login");
  }

  return (
    <section>
      <div id="dropdownInformation" class="z-50 bg-white divide-y divide-gray-100 rounded-md shadow-lg w-44 dark:bg-gray-700 dark:divide-gray-600">
          <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div class="font-medium truncate">{user.email}</div>
          </div>
          <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
            <li>
              <Link onClick={()=>setDropdown(false)} to="/products" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All eBooks</Link>
            </li>
            <li>
              <Link to='/dashboard' onClick={()=>setDropdown(false)} class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
            </li>
          
          </ul>
          <div class="py-2">
            <span onClick={handelLogout} class="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Log out</span>
          </div>
      </div>
    </section>
  )
}

export default DropdownLogin