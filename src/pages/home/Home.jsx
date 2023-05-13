import React from './home.scss'
import Hero from './../../components/heroSection/Hero';
import FeaturedProduct from '../featuredProduct/FeaturedProduct';
import Testimonials from '../../components/testimonials/Testimonials';
import Faq from './../../components/faqSection/Faq';
import { useTitle } from '../../Hook';

const Home = () => {
  useTitle('Home');
  return (
    <main>
     <Hero/>
     <FeaturedProduct/>
     <Testimonials/>
     <Faq/>
    </main>
  )
}

export default Home