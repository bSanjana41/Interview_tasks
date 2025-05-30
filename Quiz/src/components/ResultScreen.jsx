
const resultScreen = ({
    score,
    totalQuestions
}) => {
    const percentage = Math.round((score / totalQuestions) * 100)
    return (
        <>
            <div className="Outer-container-result">

                <h2>Result of the quiz</h2>

                <p>Correct answers:{score} out of {totalQuestions} questions</p> 
                <p>Percentage:{percentage}%</p>


            </div>
        </>
    )
}
export default resultScreen