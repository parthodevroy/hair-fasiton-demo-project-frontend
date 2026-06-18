import React from 'react';

import ServicesSection from './servicesSection/ServicesSection';
import Gallary from './gallary/Gallary';
import ContactUs from './contactUS/ContactUs';
import WhyChooseUs from './WhyChooseUs';
import HeroSection from './hero/HeroSection';

const Home = () => {
    return (
        <div>
           <HeroSection/>
           <ServicesSection/>
           
           <Gallary/>
           <WhyChooseUs/>
           <ContactUs/>
           
        </div>
    );
};

export default Home;