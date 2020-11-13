  
import React from 'react';
import '../../App.css';
import Footer from '../Website Layout/Footer/Footer';
import DGGame from '../Educational Tools/Definition Game/DGGame';
import DGInstructions from '../Educational Tools/Definition Game/DGInstructions';

export default function DefinitionGame() {
  // Displays Definition Game page
  return (
    <>
      <h1 className='Definition-Game'>Definition Game</h1>
      <DGInstructions/>
      <DGGame/>
      <Footer/> 
    </>
  );
}