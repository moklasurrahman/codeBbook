import React, { useState } from "react";
import Cart from "../../components/cart/Cart";
import CartCheckout from "./CartCheckout";
import { useCart } from "../../context/cartContext";

const CartList = () => {
  const { cartList, total } = useCart();

  const [cartCheck, setCartCheck] = useState(false);

  return (
    <>
      <section>
        <p className="flex justify-between items-center mt-10 uppercase font-medium text-3xl text-black dark:text-white sm:text-start text-center sm:flex-row flex-col gap-10 sm:gap-0">
         <span> Total Amount: <span className="text-cyan-800">( ${total})</span></span>
         <span>Total Item: <span className="text-cyan-800">({cartList.length})</span></span>
        </p>
      </section>

      <section>
        {cartList?.map((product) => (
          <Cart key={product} product={product} />
        ))}
      </section>

      <section className="placeorderButton text-right">
        <button
          onClick={() => setCartCheck(!cartCheck)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          PLACE ORDER
        </button>
      </section>
      {cartCheck && <CartCheckout setCartCheck={setCartCheck} />}
    </>
  );
};

export default CartList;
