import React, { Component } from "react";
import './Memory.css';

export class NewGame extends Component {

  state = {
    visible: true,
  }

  handleClick = e => {
    this.setState({ visible: !this.state.visible }, () => {
      this.props.play()
    });
  };

  render() {
    const { visible } = this.state;
    return (
      <div className="menu-item">
        <button className="btn btn-play"
          onClick={this.handleClick}
          style={{ visibility: visible ? "visible" : "hidden" }}>
          Click Here To Start
        </button>
      </div >
    );
  }
}

export default NewGame;