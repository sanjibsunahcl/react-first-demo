import React from 'react';
import '../App.css';
import Cards from '../component/Cards';
import HeroSection from '../component/HeroSection';
import Footer from '../component/Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
    
  );
}

export default Home;
