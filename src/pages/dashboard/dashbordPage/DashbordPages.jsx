import React, { useEffect, useState } from "react";
import DashbordCard from "../dashbordCard/DashbordCard";
import EmptyDashbord from "../emptyDashbord/EmptyDashbord";
import { getUserOrders } from "../../../services/dataService";
import { useTitle } from "../../../Hook";

import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DashbordPage = () => {
  
  const [orders, setOrders] = useState({})
  const dashbordEmpty= orders.length;

  useTitle("Dashbord")

  useEffect(() => {
    const fetchOrder = async () => {
      try{
        const data = await getUserOrders()
         setOrders(data)
      }catch(error){
        toast.error(error.message, {closeButton: true, position: "top-center" });
      }
      
    }
    fetchOrder()
  }, [])
  
  
  return (
    <main className="w-full flex flex-col justify-center items-center mt-[40px] dark:text-white">
      <h1 className="text-xl uppercase font-bold underline underline-offset-4">My Dashboard</h1>
            
            {
                dashbordEmpty ? <div className="mt-[10px] sm:w-full px-5 sm:px-0">
                {
                orders?.map((order) => (
                  <DashbordCard key={order.id} order={order}/>
                ))}
              </div>
                
                : <EmptyDashbord/>
            }
      
    </main>
  );
};

export default DashbordPage;
