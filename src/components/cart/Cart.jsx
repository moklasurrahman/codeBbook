import React from 'react'
import { useCart } from '../../context/cartContext';

const Cart = ({product}) => {

  const {removeFromCart} = useCart();

  const handelRemove = (product) =>{
    removeFromCart(product)
  }


  return (
    <section className='w-full'>
  
<div className='cart shadow-lg flex flex-col items-center gap-5 py-10 my-10 sm:grid sm:grid-cols-4 sm:justify-between sm:items-center sm:p-2 sm:py-5 dark:text-white'>
        <div><img className="w-[500px] h-[120px] sm:w-36 sm:h-20  object-cover"  src={product.poster} alt="" /></div>
        <div><p className='font-medium'>{product.name}</p></div>
        <div className='flex m-auto text-[20px] font-bold'><span>{product.price}$</span></div>                 
        <div className='sm:flex sm:justify-end'><button  onClick={()=> handelRemove(product)} className='bg-rose-700 hover:bg-rose-800 text-rose-100 rounded-md py-1 px-3'>Remove</button></div>
</div>
    </section>
  )
}

export default Cart