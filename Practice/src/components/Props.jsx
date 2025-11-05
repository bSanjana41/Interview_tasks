import PropCalling from "./PropCalling"

function Props() {

    function callFunc() {
        alert("func called")
    }
    const fruit = (name) => {
        alert(name)
    }
    return (
        <>
            <h1>Event and function call</h1>
            <button onClick={callFunc}>Call func</button>
            <button onClick={() => fruit("Apple")}>Show fruit</button>
            <button onClick={() => fruit("banana")}>Show fruit</button>
            
        <PropCalling  callFunc={callFunc} fruit={fruit} />
        </>
    )
}
export default Props