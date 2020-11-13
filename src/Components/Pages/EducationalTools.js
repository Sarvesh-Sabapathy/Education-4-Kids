import React from 'react';
import '../../App.css';
import Footer from '../Website Layout/Footer/Footer';
import CardsGames from '../Website Layout/Navigational Cards/CardsGames';

export default function EducationalTools() {
  //Displays educational tools page
  return (
    <>
      <h1 className='Educational-Tools'>Educational Tools</h1>
      <CardsGames/>
      <Footer/> 
    </>
  );
}