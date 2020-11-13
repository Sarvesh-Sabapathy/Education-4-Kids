import React from 'react';
import './ObjectsInstructions.css';

function ObjectsIntructions(){
//    Creates section of page for objects game instructions
    return(
        <div className = 'sectionO'>
            <div className = 'textO'>
        <h1>Instructions</h1>
        <p>There will be six pictures given and your job 
            is to match the pictures correctly by pressing 
            the correct answer. Once all 6 questions have 
            been answered, a screen will display giving you 
            your score. A play again button will also be displayed 
            that may be pressed to play the game again with a set 
            of 6 new questions.
</p>
            </div>
        </div>
    );
}

export default ObjectsIntructions