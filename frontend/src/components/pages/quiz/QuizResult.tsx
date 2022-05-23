import React, {useEffect, useState} from "react";
import {QuizModel} from "./QuizModel";

const QuizResult:  React.FC<QuizModel> = ({correctAnswer, id, userAnswer, question, joyces}) => {
    let index = 0;
    if(correctAnswer === userAnswer){
        index++;
    }

    return(
      <div>
          {index > 0 ? <h3 style={{color: "green"}}>You got question {id+1} right!</h3> : <h3 style={{color: "red"}}>Wrong answer for question {id+1}</h3>}
          <p style={{color: "white"}}>Solution: {correctAnswer}</p>
          <p style={{color: "white"}}>Your answer: {userAnswer}</p>
      </div>
    );
};

export default QuizResult;