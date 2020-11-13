  
import React from 'react';
import '../../App.css';
import ResourcesText from '../Resources/ResourcesText';
import Footer from '../Website Layout/Footer/Footer';

export default function Resources() {
  //Displays resources page 
  return (
    <>
      <h1 className='Resources'>Resources</h1>
      <ResourcesText/>
      <Footer/> 
    </>
  );
}