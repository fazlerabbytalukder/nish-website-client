import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import WhyUs from '../WhyUs/WhyUs';

const backgroundColor = {
    backgroundColor:"#fff6e9"
}


const Home = () => {
    return (
        <div style={backgroundColor}>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <WhyUs></WhyUs>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;