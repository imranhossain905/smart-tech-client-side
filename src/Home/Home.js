import React from 'react';
import OurClient from '../Pages/SharePages/OurClient/OurClient';
import ServiceCards from '../Pages/SharePages/ServiceCard/ServiceCards';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner/>
            <ServiceCards/>      
            <OurClient/>
         
        </div>
    );
};

export default Home;