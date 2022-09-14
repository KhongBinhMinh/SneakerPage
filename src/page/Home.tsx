import React from 'react'
import Banner from '../component/Banner'
import CompanyLogo from '../component/CompanyLogo'
import Footer from '../component/Footer'
import Header from '../component/Header'
import HeadFooter from '../component/HeadFooter'
import ImagesField from '../component/ImagesField'
import InsImage from '../component/InsImage'
import ProductPromo from '../component/ProductPromo'
import ProductPromo2 from '../component/ProductPromo2'
import Promo from '../component/Promo'
import ShoppingInfo from '../component/ShoppingInfo'
import SlideImage from '../component/SlideImage'
import SlideProduct2 from '../component/SlideProduct2'
import SlideProduct from '../component/SlideProducts'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {}

const Home = (props: Props) => {
    return (
        <div>
            {/* header */}
            <Header />
            {/* banner */}
            <Banner />
            {/* First Field */}
            <div className='w-460 h-1 bg-slate-200 mt-4'></div>
            <SlideProduct />
            {/* Product Promo Images */}
            <ProductPromo />
            {/* Company logos */}
            <CompanyLogo />
            {/* Product Promo Images 2 */}
            <ProductPromo2 />
            {/* Slide Image */}
            <SlideImage />
            {/* Product Slide */}
            <SlideProduct2 />
            {/* Promo */}
            <Promo />
            {/* Instagram Image */}
            <InsImage />
            {/* Images Field */}
            <ImagesField />
            {/* Shopping information  */}
            <ShoppingInfo />
            {/* Head Footer */}
            <HeadFooter />
            {/* Container Footer */}
            <Footer />
        </div>
    )
}

export default Home