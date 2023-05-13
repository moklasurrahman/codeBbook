import React from 'react'
import { Link } from 'react-router-dom'

const DropdownLogout = ({setDropdown}) => {
  
  return (
   
   <section>
    <div id="dropdownInformation" class="z-50 bg-white divide-y divide-gray-100 rounded-md shadow-lg w-44 dark:bg-gray-700 dark:divide-gray-600">

    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
      <li>
        <Link to="/products" onClick={()=>setDropdown(false)} class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All eBooks</Link>
      </li>
      <li>
        <Link to='/login' onClick={()=>setDropdown(false)} class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Login</Link>
      </li>

      <li>
        <Link to='/sign-up' onClick={()=>setDropdown(false)} class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Register</Link>
      </li>
     
    </ul>
   
</div>
    </section>
  )
}

export default DropdownLogout