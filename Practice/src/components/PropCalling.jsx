const PropCalling=({callFunc,fruit})=>{


return(
    <>
    <hr></hr>
    <h1>{`The fruit :${fruit}`}</h1>
    <h1>{`The function :${callFunc}`}</h1>
      <button onClick={callFunc}>Call Parent Function</button>
      <button onClick={() => fruit("Mango")}>Show Fruit</button>

    </>
)
}
export default PropCalling