  
import React from 'react';
import '../../App.css';
import Footer from '../Website Layout/Footer/Footer';
import CardsHome from '../Website Layout/Navigational Cards/CardsHome';

export default function Home() {
  //Displays home page
  return (
    <>
      <h1 className='home'>Education 4 Kids</h1>
      <CardsHome/>
      <Footer/>     
    </>
  );
}