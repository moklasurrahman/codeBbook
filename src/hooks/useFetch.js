/* eslint-disable react-hooks/exhaustive-deps */
import {useState,  useEffect} from 'react'
import { useFilter } from '../context';

const useFetch = (url) => {
    // const [products, setProducts] = useState();
    const [isLoding, setIsloding] = useState(false);
    const [error, setError] = useState(null);

    const { products, initialProductList } = useFilter();

    useEffect(() => {
    
        const fetchData = async () => {
          setIsloding(true);
          try {
            const response = await fetch(url);
            const data = await response.json();
            // setProducts(data);
            initialProductList(data)
          } catch (error) {
            setError(error);
          } finally {
            setIsloding(false);
          }
        };
    
        fetchData();
    
      
      
      }, [url]) 
  
    return {products, isLoding, error}
}

export default useFetch