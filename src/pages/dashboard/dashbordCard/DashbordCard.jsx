import React from 'react'
import { Link } from 'react-router-dom';


const DashbordCard = ({order}) => {


  return (

        <section className=' mt-5 max-w-6xl m-auto p-2 mb-5 border border-blue-400'>
           <div className="flex gap-5  mt-[50px] text-lg capitalize font-bold items-center justify-center">
                <span>Order Id: {order.id}</span>
                <span>Total Spend: {order.amount_paid}$</span>
            </div>
            {order?.cartList.map((product)=>(
              <div className='border m-5'>
                <div className='cart shadow-sm flex flex-col items-center gap-5 py-10 my-10 sm:grid sm:grid-cols-3 sm:justify-between sm:items-center sm:p-2 sm:py-5 dark:text-white'>
                  <Link to={`/Product/${product.id}`}>
                  <div><img className="w-[500px] h-[120px] sm:w-36 sm:h-20  object-cover"  src={product.poster} alt={product.name}/></div>
                  </Link>

                  <Link to={`/Product/${product.id}`}>
                  <div><p className='font-medium'>{product.name}</p></div>
                  </Link>
                    <div className='text-[20px] font-bold sm:flex sm:justify-end'><span>{product.price}$</span></div>
            </div> 
              </div>
            ))}
        </section>
  )
}

export default DashbordCard