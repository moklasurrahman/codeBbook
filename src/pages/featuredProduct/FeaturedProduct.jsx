import Card from '../../components/card/Card'
import useFetch from './../../hooks/useFetch';

const FeaturedProduct = () => {

  const {products, isLoding, error} = useFetch(`${process.env.REACT_APP_API_URL}/444/featured_products`);


  return (
    <section className='featuredProduct my-20'>
        <div className="title">
        <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured eBooks</h1>    
        </div>
      
        <div className='text-2xl flex justify-center'>{isLoding && 'Loading...'}</div>
        <div className='text-2xl flex justify-center text-red-600'>{error && 'Something wrong.....'}</div>

        <div className="items m-auto justify-center items-center flex gap-10 flex-col lg:flex-row md:grid md:m-0 md:grid-cols-2 lg:grid-cols-3">
          {
            products?.map((product)=>
              (<Card key={product.id} product={product}/>))
           
          }
        </div>
    </section>
  )
}

export default FeaturedProduct