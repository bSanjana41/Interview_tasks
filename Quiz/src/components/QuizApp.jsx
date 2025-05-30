import React, { useState, useEffect } from "react";
import QuestionCard from "../components/QuestionCard";
import ResultScreen from "../components/ResultScreen"
import QuizQuestions from "../../data/questions";
const QuizApp = () => {
    const [questions, setQuestions] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);

    const LoadQuestions = async () => {
        try {
            // const questions=await fs.readFile(QuizQuestions)
            // const Questions = await QuizQuestions()
            setQuestions(QuizQuestions)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        LoadQuestions()
    }, [])


    const handleAnswer = (isCorrect,correct_answer) => {
        console.log(isCorrect)
        console.log(correct_answer)
        if (isCorrect) {
            if(isCorrect==correct_answer){

                setScore(score + 1);
            }
        }
        const nextQuestion = currentIndex + 1;
        if (nextQuestion < questions.length) {
            setCurrentIndex(nextQuestion);
        } else {
            setShowResults(true);
        }
    };
    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    }
    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);

        }
    }

    console.log(questions)

    return (
        <div className="outer-container">
            {showResults ? (
                <ResultScreen
                    score={score}
                    totalQuestions={questions.length}
                />
            ) : (
                <QuestionCard
                    question={questions[currentIndex]}
                    questionNumber={currentIndex + 1}
                    totalQuestions={questions.length}
                    onAnswer={handleAnswer}
                    onNext={handleNext}
                    onPrev={handlePrev}

                />
            )}
        </div>
    );
};
export default QuizApp