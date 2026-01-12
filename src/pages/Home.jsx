import React from 'react';
import Hero from '../components/home/Hero';
import Statistics from '../components/home/Statistics';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ExpertService from '../components/home/ExpertService';

import Services from "../components/home/Services";
import GalleryCarousel from "../components/home/GalleryCarousel";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main>
      <Hero />
      <Statistics />
      <WhyChooseUs />
      <ExpertService />
      <Services />
      <GalleryCarousel />
      <Footer />
    </main>
  );
};

export default Home;