/* 
Definition Game Question Box 
 
 
*/
 
import React, { useState } from "react";
 
/* Constant QuestionBox creates the correct format for a question exported from "DGQuestions". */
const QuestionBox = ({ question, options, selected }) => {
    const [answer, setAnswer] = useState(options);
    return (
        /* divs used so it will appear as:
        box surrounding the question
            Question
            option 1, option 2, option 3, option 4 (can be more than 4 options if the question contains more than 4 options)
 
        */
        <div className="questionBox">
            <div className="question">{question}</div>
            {answer.map((text, index) => (
                <button
                    key={index}
                    className="answerButton"
                    onClick={() => {
                        /* makes the formatted buttons but contain the correct options.
                        When a button is pressed, that selected button will become the only visible button.
                        */
                        setAnswer([text]);
                        selected(text);
                    }}>
                    {text}
                </button>
            ))}
        </div>
    );
};
 
export default QuestionBox;
 
