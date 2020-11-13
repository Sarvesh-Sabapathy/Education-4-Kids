import React from 'react';
import './MemoryInstructions.css';

function MemoryIntructions(){
//Creates section on page for memory game instructions
    return(
        <div className = 'sectionMemory'>
            <div className = 'textMemory'>
        <h1>Instructions</h1>
        <p>You will see 20 cards that are flipped over, 
            when one is pressed, the card will flip over 
            revealing an image. When another card is clicked, 
            that card will also be flipped over. If the 2 cards 
            do not match, they will be flipped back over. If both 
            cards are the same, they will remain flipped over and
            you must find each pair of cards until none are left.</p>
            </div>
        </div>
    );
}

export default MemoryIntructions