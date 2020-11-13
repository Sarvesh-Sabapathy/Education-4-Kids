import React from 'react';
import './DGInstructions.css';

function DGIntructions(){
    return(
        <div className = 'sectionDG'>
            <div className = 'textDG'>
        <h1>Instructions</h1>
        <p>Six random knowledge questions are given and your job is to answer 
                the question correctly by pressing the button with the correct 
                answer. Once all 6 questions have been answered, a screen will 
                display giving you your score. A play again button will also be 
                displayed that may be pressed to play the game again with a set 
                of 6 new questions.</p>
            </div>
        </div>
    );
}

export default DGIntructions