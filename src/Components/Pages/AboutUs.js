import React from 'react';
import '../../App.css';
import AboutUsText from '../About Us/AboutUsText';
import Footer from '../Website Layout/Footer/Footer';

export default function AboutUs() {
  // Displays About Us page
  return (
    <>
      <h1 className='About-Us'>About Us</h1>
      <AboutUsText/>
      <Footer/> 
    </>
  );
}