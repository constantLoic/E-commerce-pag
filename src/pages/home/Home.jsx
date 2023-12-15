import React from 'react'
import Category from './Category';
import Banner from './banner';
import Products from './Products';
import Collections from './Collections';
import BestSellers from './BestSellers';
import Newsletter from './Newsletter';

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <Products />
            <Collections />
            <BestSellers />
            <Newsletter />

        </div>

    )
}

export default Home;