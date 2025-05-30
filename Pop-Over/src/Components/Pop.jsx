import React, { useState, useEffect } from "react";

const Pop = () => {
    const [isModal, setIsModal] = useState(false)

    const toggleSwitch = () => {
        setIsModal(prev => !prev)
        
    }
    return (
        <>
            <div className={`Outer-container ${isModal ? "Active" : "Inactive"}`}>
                <label >{isModal ? "Select to close modal" : "unselect to open modal"}</label>
                <input
                    type="checkbox"
                    checked={isModal}
                    onChange={toggleSwitch}
                ></input>
                {(isModal && (<h1>inner content 123456</h1>)
                )}
            </div>
        </>
    )
}

export default Pop