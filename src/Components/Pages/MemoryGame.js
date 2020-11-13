import React from 'react';
import '../../App.css';
import Footer from '../Website Layout/Footer/Footer';
import MemoryApp from '../Educational Tools/Memory Game/MemoryApp';
import MemoryInstructions from '../Educational Tools/Memory Game/MemoryInstructions';

export default function MemoryGame() {
  //Displays memory game page
  return (
    <>
      <h1 className='Memory-Game'>Memory Game</h1>
      <MemoryInstructions/>
      <MemoryApp/>
      <Footer/> 
    </>
  );
}

