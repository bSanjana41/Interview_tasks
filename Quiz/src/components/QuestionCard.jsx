import React from "react";
import { useState } from "react";

const QuestionCard = ({ 
  question, 
  questionNumber, 
  totalQuestions, 
  onAnswer,
  onNext,
  onPrev
}) =>{
console.log(question)
return (
 <div className="question-card">
  {question && (
    <>
      <p>{questionNumber}.{question.question}</p>
      {question.options.map((option, index) => (
        <p onClick={()=>onAnswer(option,question.correct_answer)} key={index}>{option}</p>
      ))}
      <p>total questions{totalQuestions}</p>
     { <button disabled={questionNumber==1} onClick={onPrev}>Prev</button>}

      { <button disabled={questionNumber==totalQuestions} onClick={onNext}>Next</button>}
      
    </>
  )}
</div>

  );
};
export default QuestionCard