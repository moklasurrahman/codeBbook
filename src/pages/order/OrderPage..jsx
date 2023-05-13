import React from "react";
import OrderFaild from "./orderSuccessAndFaild/OrderFaild";
import OrderSuccess from "./orderSuccessAndFaild/OrderSuccess";
import { useLocation } from "react-router-dom";

const OrderPage = () => {
  const { state } = useLocation(); //comming from cartCheckout

  return (
    <div>
      {state.status ? <OrderSuccess data={state.data} /> : <OrderFaild />}
    </div>
  );
};

export default OrderPage;
