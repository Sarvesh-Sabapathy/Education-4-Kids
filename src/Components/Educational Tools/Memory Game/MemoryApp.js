import React, { Component } from "react";
import GameBoard from "./GameBoard";
import NewGame from "./NewGame";
import PlayAgain from './PlayAgain';
import './Memory.css';

class MemoryApp extends Component {
  //Creates game settings
  static initState = () => {
    return {
      newGame: false,
      won: false,
      cards: [],
      clicks : 0
    };
  }

  state = MemoryApp.initState();

  // Counts number of flips
  countClicks = () => {
    this.setState((prevState) => ({
        clicks : prevState.clicks + 1
    }));
  }

  //reading files for highscore
  highscore = () => {
    var score = 0;
    localStorage.setItem("highscore",0);
    if (score > parseInt(localStorage.getItem("highscore"))) {
      localStorage.setItem("highscore", score);
    }
  };

  // Creates the deck
  generateDeck = () => {
    let amount = 9;
    let cards = [];
    for (let i = 0; i < amount + 1; i++) {
      let id = createId();
      let id2 = createId();
      let rand = Math.floor(i) + 1;
      // Cards are imported by a file created by us with memory images called from our github
      const card1 = {
        id: id,
        matchesId: id2,
        url: `https://ghcdn.rawgit.org/Sarvesh-Sabapathy/Sprites/master/sprites/src/${rand}.png`,
        flipped: false,
        found: false,
      }
      const card2 = {
        id: id2,
        matchesId: id,
        url: `https://ghcdn.rawgit.org/Sarvesh-Sabapathy/Sprites/master/sprites/src/${rand}.png`,
        flipped: false,
        found: false,
      }
      cards.push(card1);
      cards.push(card2);
    }
    this.shuffleCards(cards);
    this.setState({
      cards: cards
    });
  }

  // Shuffles cards to random order
  shuffleCards = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Resets the game
  resetGame = () => {
    this.setState(MemoryApp.initState(), () => {
      this.initGame()
    });
  }

  // sets game state to won
  hasWon = () => {
    this.setState({
      won: true
    });
  };

  // Creates new game
  initGame = () => {
    this.generateDeck();
    this.setState({
      newGame: true
    });
  };

  // Displays game for user
  render() {
    const { cards, newGame, won, clicks } = this.state;
    return (
      <div>
        <div className="board-container">
          {newGame ?
            (<GameBoard cards={cards} won={this.hasWon} click={this.countClicks} />)
            : null}
            {newGame && (<p className="message center">Total flips: {clicks}</p>)}
        </div>

        <div className="menu">
        <div className="message">
            {won && (<h2>Congratulations, you completed the Memory Game!</h2>)}
          </div>
          <NewGame play={this.initGame} />
          {won && (<PlayAgain again={this.resetGame} />)}
        </div>
      </div>
    );
  }
}

export default MemoryApp;

const createId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
