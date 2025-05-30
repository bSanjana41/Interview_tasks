import React, { useState } from "react";

const Form1 = () => {
    const [input, setInput] = useState({
        "Name": "",
        "Phone": "",
    })

    const submitHadler = (e) => {
        e.prevent.default(e)
        console.log("form submitted", input)
    }

    const onchangeHandler = (e) => {
        setInput((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
        console.log(e.target.value)
    }

    return (
        <div className="outer-container">
            <form onSubmit={submitHadler}>
                <label>Name :</label>
                <input
                    type="text"
                    aria-label="Name"
                    name="Name"
                    value={input.Name}
                    onChange={onchangeHandler}
                />
                <br />

                <label htmlFor="Phone">Phone Number :</label>
                <input
                    type="text"
                    name="Phone"
                    id="Phone"
                    maxLength={10}
                    value={input.Phone}
                    onChange={onchangeHandler}
                />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}
export default Form1