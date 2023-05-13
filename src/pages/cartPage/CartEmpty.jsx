import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
const CartEmpty = () => {
  return (
    <section className="text-center w-full h-screen flex m-auto justify-center">
      <div className="w-[500px] border rounded-md text-md p-5 flex gap-3 flex-col items-center justify-center m-auto text-black dark:text-white">
        <ShoppingCartOutlinedIcon
          style={{ fontSize: "80px", color: "green" }}
        />
        <p>
          Oops!Your cart looks empty! <br />
          Add eBooks to your cart from our store collection.
        </p>
        <Link
          to="/products"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Continue Shopping{" "}
          <ShoppingCartOutlinedIcon style={{ fontSize: "15px" }} />
        </Link>
      </div>
    </section>
  );
};

export default CartEmpty;
