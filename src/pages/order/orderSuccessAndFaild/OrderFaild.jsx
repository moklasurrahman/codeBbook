import React from 'react'
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from 'react-router-dom';

const OrderFaild = () => {
  return (
    <section className="w-full flex m-auto justify-center">
      <main className=" w-[800px] border my-[80px] m-5">
        <div className="item flex text-lg flex-col m-auto items-center justify-center gap-[20px] dark:text-white">
          <p>
            <WarningAmberIcon
              style={{ fontSize: "70px", color: "#b91c1c" }}
            />
          </p>

          <p className="flex flex-col gap-[3px] m-auto items-center justify-center text-center">
            <span> <strong className='text-[#b91c1c]'>Warning</strong> Payment failed please try again</span>
          </p>

          <p className="flex flex-col gap-[3px] m-auto items-center justify-center text-center">
            <span>Your order is Not confirmed.</span>
            <span>Please Connect codebook@gmail.com for support.</span>
          </p>


          <Link
            to="/cart"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Check Cart Again <ShoppingCartOutlinedIcon style={{fontSize:"15px"}} />
          </Link>
        </div>
      </main>
    </section>
  )
}

export default OrderFaild