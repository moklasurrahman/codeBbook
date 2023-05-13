

export const getProductList = async() =>{
    
    // const { products, isLoding, error }  = useFetch(`http://localhost:8000/products?name_like=${searchTerm ? searchTerm : ''}`);
    
    // go to the 'ProductsList page'

}

export const getproduct = async(id) =>{ // will go cardDetailPage
    const response = await fetch(`${process.env.REACT_APP_API_URL}/444/products/${id}`);
   
    if(!response.ok){ //This code for error handel
        // eslint-disable-next-line no-throw-literal
        throw { message: response.statusText, status: response.status };
    }

    const data = await response.json();
    return data;

}

export const getfeaturedList = async() =>{
    // go to the '/FeaturedProduct'
}