import React from 'react'
import './Memory.css';

export default function PlayAgain({ again }) {

// Creates play again button
    return (
        <div className="menu-item">
            <button className="btn" onClick={() => again()}>Play again?</button>
        </div>
    )
}