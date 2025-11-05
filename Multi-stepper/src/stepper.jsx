import React from "react";
import { useState } from "react";

const Stepper = ({ steps }) => {

    const [currentStep, setCurrentStep] = useState(0);
    const totalSteps = steps.length
    console.log(currentStep)
    console.log(totalSteps)

    const handleNext = () => {
        if (currentStep < totalSteps - 1) {
            setCurrentStep(currentStep + 1)
        }
    }
    const handlePrev = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1)
        }
    }


    return (
        <>
            <div className="stepper-container">
                <div className="steps">
                    {steps.map((step, index) => (
                        <div key={index} className="step-list">
                            <div className="step-indicator">
                                <div className={`step-number ${index <= currentStep ? "active" : ""}`}>{index + 1}</div>
                                {index < steps.length - 1 && <div className={`step-line ${index < currentStep ? "active" : ""}`}></div>}
                            </div>
                        </div>

                    ))}
                    <div className="step-info" >
                        <div className="step-title">{steps[currentStep].title}</div>
                        <div className="step-content">{steps[currentStep].content}</div>
                    </div>

                </div>
                <div className="navigation-buttons">
                    <button onClick={handleNext} disabled={currentStep === totalSteps - 1}>Next</button>
                    <button onClick={handlePrev} disabled={currentStep === 0}> Back</button>
                </div>
            </div>
        </>
    )

}

export default Stepper