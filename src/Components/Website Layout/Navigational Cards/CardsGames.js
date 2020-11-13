import React from 'react';
import './Cards.css';
import CardItem from './CardItems';

function CardsGames() {
  //Creates card section on page
  return (
    <div className='cards'>
      <h1>Visit Our Educational Tools!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {/* Makes objects game card */}
            <CardItem
            src= 'images/objects.png'
            text='Visit the Objects Game'
            label='Objects Game'
            path='/Objects-Game'
            />
            {/* Makes memory game card */}
            <CardItem
            src= 'images/memory.png'
            text='Visit the Memory Game'
            label='MemoryGame'
            path='/Memory-Game'
            />
            {/* Makes definition game card */}
            <CardItem
            src= 'images/definition.png'
            text='Visit the Definition Game'
            label='Definition Game'
            path='/Definition-Game'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsGames;