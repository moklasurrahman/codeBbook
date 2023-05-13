import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import img from "../../assets/img/book1.jpg";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Rating } from "./Rating";
import { useCart } from "../../context/cartContext";

const Card = ({ product }) => {
  const { id, name, overview, price, poster, rating, best_seller } = product;

  const { cartList, addToCart, removeFromCart } = useCart();

  const [inCart, setIncart] = useState(false);


  useEffect(() => {
    const productIncard = cartList.find(item => item.id === product.id);

    if(productIncard){
      setIncart(true)
    }
    else{
      setIncart(false)
    }
  }, [cartList, product.id])
 
  
  return (
    <div className="card flex justify-center w-full">
      <div className="w-full z-10 max-w-md overflow-hidden bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to={`/Product/${id}`} className="relative">
          <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">
            {best_seller ? "Best Seller" : ""}
          </span>
          <img
            className="object-cover w-full h-64 overflow-hidden"
            src={poster}
            alt="product-imag"
          />
        </Link>
        <div className="px-5 pb-4">
          <Link to={`/Product/${id}`}>
            <h5 className="text-2xl truncate py-[15px] font-semibold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </Link>
          <p className="text-md text-gray-900 dark:text-white">{overview}</p>

          <div className="flex items-center mt-[15px] mb-5">
           
            {/* ________________________________ */}
            <Rating rating={rating} />
            {/* ________________________________ */}

            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              {rating}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl  text-gray-900 dark:text-white">
              ${price}
            </span>

          {
          !inCart && <button
          onClick={() => addToCart(product)} disabled={product.in_stock? '' : 'disabled'}
          className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${product.in_stock? '': 'cursor-not-allowed'}`}>
          Add to cart <AddIcon style={{fontSize:"20px"}}/>
        </button>
            }

            {
              inCart && <button onClick={() => removeFromCart(product)} disabled={product.in_stock? '' : 'disabled'} className={`text-white bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 hover:bg-red-500 dark:focus:bg-red-800 ${product.in_stock? '': 'cursor-not-allowed'}`}>
              Remove to cart <DeleteIcon style={{fontSize:"20px"}}/>
            </button>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
