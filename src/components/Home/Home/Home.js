import React from 'react';
import FeaturedCard from '../../FeaturedCard/FeaturedCard';


import AllServices from '../AllServices/AllServices';
import HeroSection from '../HeroSection/HeroSection';
import AboutUs from '../../AboutUs/AboutUs';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            {/* <FeaturedCard></FeaturedCard>
            <AboutUs></AboutUs> */}
            <AllServices></AllServices>
            
            
        </div>
    );
};

export default Home;