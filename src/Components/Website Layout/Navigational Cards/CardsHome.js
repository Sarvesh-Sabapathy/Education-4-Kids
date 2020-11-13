import React from 'react';
import './Cards.css';
import CardItems from './CardItems';
 
function CardsHome() {
  //Creates card section on page
  return (
    <div className = 'background'>
    <div className='cards'>
      <h1>Welcome To Education 4 Kids</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {/* Create educational tools card */}
            <CardItems
            src= 'images/Untitled.png'
            text='Visit our Educational Tools'
            label='Educational Tools'
            path='/Educational-Tools'
            />
            {/* Creates resources card */}
            <CardItems
            src='images/human-resources-screening-process-header@2x.png'
            text='Visit our Resources Page'
            label='Resources'
            path='/Resources'
            />
            {/* Creates about us card */}
            <CardItems
            src='images/Untitled2.png'
            text='Visit our About Us Page'
            label='About Us'
            path='/About-Us'
            />
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}
 
export default CardsHome;
