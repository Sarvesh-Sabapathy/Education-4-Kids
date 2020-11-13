/* 
Definition Game  
 
This javascript file contains the page for when you click onto "Definition game" under "Educational Tools"
*/
import React, { Component } from 'react';
import "./DGStyles.css";
import DGQuestions from './DGQuestions';
import QuestionBox from "./DGQuestionBox";
import DGReplay from "./DGReplay";
 
class DGGame extends Component {
 
  /* Setting variables and an array for the questions */
  state = {
    questionBank: [],
    numCorrectAnswers: 0,
    numAnswers: 0
  };
 
 
  /* Method for which if the button pressed is the correct answer, it adds 1 to the variable "numCorrectAnswers"  */
  getAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      this.setState({
        numCorrectAnswers: this.state.numCorrectAnswers + 1
      });
    }
    /* Method will also add 1 to the total number of questions answered which is used for checking if all questions are completed */
    this.setState({
      numAnswers: this.state.numAnswers < 6 ? this.state.numAnswers + 1 : 6
    })
  };
 
 
  /* Function that will get new questions when the page is either reloaded or if the play again button is pressed as well as
  change the number of questions answered and the number of correct answers to 0.   */
  playAgain = () => {
    this.acquireQuestions();
    this.setState({
      numCorrectAnswers: 0,
      numAnswers: 0
    })
  }
  /* componentDidMount will call the acquireQuestions method which gives a new set of questions */
  componentDidMount() {
    this.acquireQuestions();
  }
  acquireQuestions = () => {
    DGQuestions().then(question => {
      this.setState({
        questionBank: question
      });
    });
  };
 
 
  /* Renders the main part of the definition game page that displays everything, */
  render() {
    return (
      /* Adds the Titlebox as well as the container which contains the whole game */
      <div className = 'DDGBackground'>
        <div className="largeContainer">
          <div className="titleBox">Definition Game</div>
          {/* Checks to see if less than 6 questions have been made if so, creates a question */}
          {this.state.questionBank.length > 0 &&
            this.state.numAnswers < 6 &&
            this.state.questionBank.map(
              /* Using the "map" tool, maps the question so that the question is on top and the 
              answers are listed below it in the correct order. Calls the constant from DGQuestionBox. */
              ({ question, answers, correct, QID }) => (
                <QuestionBox
                  question={question}
                  options={answers}
                  key={QID}
                  selected={answer => this.getAnswer(answer, correct)}
                />
              )
            )}
            {/* Once the state of numAnswers is 6 (when all 6 questions have been answered), the replay screen is displayed */}
          {this.state.numAnswers === 6 ? (
            <DGReplay numCorrectAnswers={this.state.numCorrectAnswers} playAgain={this.playAgain} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default DGGame
 
 
