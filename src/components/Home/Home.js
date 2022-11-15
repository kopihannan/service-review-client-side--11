import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import OurChef from '../OurChef/OurChef';
import ServicesFood from '../Services/ServicesFood';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <ServicesFood></ServicesFood>
            <OurChef></OurChef>
        </div>
    );
};

export default Home;