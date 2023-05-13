import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Card from './../../components/card/Card';
import FilterBar from './filter/FilterBar';
import { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { useLocation } from 'react-router-dom';
import { useTitle } from './../../Hook';
// import { useFilter } from '../../context';
const ProductsList = () => {
  useTitle('All Products');
    const[filter, setFilter] = useState(false);

    //for search
    const search = useLocation().search;
    
    const searchTerm = new URLSearchParams(search).get("q");
  
    const {products, isLoding, error}  =  useFetch(`${process.env.REACT_APP_API_URL}/444/products?name_like=${searchTerm ? searchTerm : ''}`);
  

    if (isLoding) {
      return <div className='text-2xl '>Loading...</div>;
    }
    
    // if (error) {
    //   return <div className='text-2xl'>Error: {error.message}</div>;
    // }

    
  return (
    <main className='relative'>
        <section className='productsList my-5'>
        <div className="flex justify-between">
         <span className='text-2xl font-semibold dark:text-slate-100 mb-5'>All eBooks ({products?.length})</span>
        <div className=''>
        <button onClick={()=> setFilter(!filter)} id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" className="inline-flex items-center p-2 font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700" type="button"> 
         <MoreVertIcon style={{fontSize:"25px"}}/>
        </button>
        </div> 
        </div>  

        <div className='text-2xl flex justify-center text-red-600'>{error && 'Some thing worng.....'}</div>


        <div className='m-auto justify-center items-center flex gap-10 flex-col lg:flex-row md:grid md:m-0 md:grid-cols-2 lg:grid-cols-3'>
        {
            products?.map((product)=>
              (<Card key={product.id} product={product}/>))
           
          }
        </div>
    </section>

{
    filter && <FilterBar setFilter={setFilter} />
}
     
</main>
  )
}

export default ProductsList