import { useParams } from "react-router-dom";
import { Rating } from "./../../components/card/Rating";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTitle } from "./../../Hook";
import { useCart } from "../../context/cartContext";
import { useEffect, useState } from "react";
import { getproduct } from "../../services/productService";

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const CardDetailsPage = () => {
  const { cartList,addToCart, removeFromCart } = useCart();
  const [inCart, setIncart] = useState(false);
  const[product, setProduct] = useState({})

  useTitle("ProductDetails");
  const { id } = useParams();


  useEffect(() => {
   async function fetchProducts(){
    try{
      const data = await getproduct(id)
        setProduct(data)
    }
    catch(error){
      toast.error(error.message, {closeButton: true, position: "bottom-center" });
    }
    
   }
   fetchProducts()
  }, [id])
  

  // const { product, isLoding, error } = useFetch(
  //   `http://localhost:8000/products/${id}`
  // );


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
    <main>
      <div className="CardDetailsPage">
        {/* {isLoding && <h1>Loding......</h1>}
        {error && <h1>Error......</h1>} */}

        <div className="heding text-center ">
          <h1 className="mt-10 mb-5 text-2xl lg:text-4xl text-center font-bold text-gray-900 dark:text-slate-200">
            {product?.name}
          </h1>
          <p className="mb-5 text-sm lg:text-lg text-center text-gray-900 dark:text-slate-200">
            {product?.overview}
          </p>
        </div>

        <div className="items flex gap-5 md:gap-10 flex-col md:flex-row">
          <div className="left md:flex-1">
            <div className="max-w-xl my-3 md:my-0">
              <img
                className="rounded object-fill"
                src={product?.poster}
                alt="bookImg"
              />
            </div>
          </div>

          <div className="right md:flex-1">
            <div className=" flex flex-col">
              <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
                <span className="mr-1">$</span>
                <span>{product?.price}</span>
              </p>

              <p className="my-3">
                <span>
                  <Rating rating={product?.rating} />
                </span>
              </p>

              <div className="my-3 flex gap-1 md:gap-5 text-[10px] md:text-[12px]">
                {product?.best_seller && (
                  <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">
                    BEST SELLER
                  </span>
                )}

                {product?.in_stock && (
                  <span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                    INSTOCK
                  </span>
                )}

                {!product?.in_stock && (
                  <span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                    OUT OF STOCK
                  </span>
                )}

                <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                  {product?.size} MB
                </span>
              </div>
              <p>

  {
    !inCart && <button onClick={()=> addToCart(product)} 
                className={`inline-flex items-center py-2 my-3 px-5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ${product.in_stock? '': 'cursor-not-allowed'}`} disabled={product.in_stock? '' : 'disabled'}
              >
                Add To Cart{" "}
                <AddIcon style={{ fontSize: "20px", marginLeft: "3px" }} />
              </button>
  }

  {
    inCart && <button onClick={()=>removeFromCart(product)} className={`inline-flex items-center py-2 my-3 px-5 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800`} disabled={product.in_stock? '' : 'disabled'}>Remove To Cart <DeleteIcon style={{fontSize:'20px', marginLeft:'3px'}}/></button>
  }          

</p>
            
            
              <p className="mb-5 text-sm lg:text-md lg:text-xl text-gray-900 dark:text-slate-200">
                { product?.long_description }
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CardDetailsPage;
