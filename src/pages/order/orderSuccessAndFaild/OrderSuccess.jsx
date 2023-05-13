import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

const OrderSuccess = ({data}) => {
  return (
    <section className="w-full flex m-auto justify-center">
      <main className=" w-[800px] border my-[80px] m-5">
        <div className="item flex text-lg flex-col m-auto items-center justify-center gap-[20px] dark:text-white">
          <p>
            <CheckCircleOutlineIcon
              style={{ fontSize: "70px", color: "green" }}
            />
          </p>

          <p className="flex flex-col gap-[3px] m-auto items-center justify-center text-center">
            <span>Thank you <strong className="text-green-700 uppercase">{data.user.name}</strong> for the order!</span>
            <span>Your Order ID: {data.id}</span>
          </p>

          <p className="flex flex-col gap-[3px] m-auto items-center justify-center text-center">
            <span>Your order is confirmed.</span>
            <span>Please check your mail ({data.user.email}) for the eBook.</span>
          </p>

          <p>Payment ID: xyz_123456789</p>

          <Link
            to="/products"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Continue Shopping <ShoppingCartOutlinedIcon style={{fontSize:"15px"}} />
          </Link>
        </div>
      </main>
    </section>
  );
};

export default OrderSuccess;
