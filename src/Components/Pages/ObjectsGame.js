import React from 'react';
import '../../App.css';
import Footer from '../Website Layout/Footer/Footer';
import OBSGame from '../Educational Tools/Objects Game/OBSGame';
import ObjectsInstructions from '../Educational Tools/Objects Game/ObjectsInstructions';


export default function ObjectsGame() {
  //Displays object game page
  return (
    <>
      <h1 className='Objects-Game'>Objects Game</h1>
      <ObjectsInstructions/>
      <OBSGame/>
      <Footer/> 
    </>
  );
}