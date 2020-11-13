import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";
import './Memory.css';

export class MemoryCard extends Component {

  // Flips the cards
  flipCard = e => {
    if (this.props.found || this.props.flipped) return;
    this.props.flip(e.target.id);
  };

  // Settings for what goes on the cards
  render() {
    const { id, imgUrl, flipped, found } = this.props;
    return (
      <div className="card">
        <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
          <div id={id}
            className="memoryCard front"
            onClick={this.flipCard}
            style={cardBack}
            key="front"
          />
          <div
            className="memoryCard"
            onClick={this.flipCard}
            key="back"
            style={{
              backgroundImage: `url(${imgUrl})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat", backgroundPosition: "center",
              backgroundColor: found ? "green" : "#3700B3",
              cursor : found ? "" : "pointer",
            }}
          >
          </div>
        </ReactCardFlip>
      </div>
    );
  }
}

const cardBack = {
  background: "#3700B3",
}


export default MemoryCard;