import React from 'react'
import { BrowserRouter, Routes,Route, } from "react-router-dom";
import Erroe from './Erroer';
import Home from './../pages/home/Home';
import Navbar from '../components/navbarSection/Navbar';
import Footer from '../components/footerSection/Footer';
import ProductsList from './../pages/products/ProductsList';
import CardDetailsPage from '../pages/cardDetailsPage/CardDetailsPage';
import Login from './../pages/Register/Login';
import Signup from '../pages/Register/Signup';
import CartPage from '../pages/cartPage/CartPage';
import ProtectedRoutes from './ProtectedRoutes';
import OrderPage from '../pages/order/OrderPage.';
import DashbordPage from '../pages/dashboard/dashbordPage/DashbordPages.jsx';



const index = () => {
  return (
    <>


    <BrowserRouter>

      <Navbar/>
       <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<ProductsList/>}/>
            <Route path='/Product/:id' element={<CardDetailsPage/>}/>
           
            <Route path='/login' element={<Login/>}/>
            <Route path='/sign-up' element={<Signup/>}/>

            <Route path='/cart' element={ <ProtectedRoutes><CartPage/></ProtectedRoutes> }/>
            <Route path='/order-summary' element={ <ProtectedRoutes><OrderPage/></ProtectedRoutes> }/>
            <Route path='/dashboard' element={ <ProtectedRoutes><DashbordPage/></ProtectedRoutes> }/>


            <Route path='*' element={<Erroe/>}/>
        </Routes>
       
       <Footer/>
  </BrowserRouter>
    </>
  )
}

export default index