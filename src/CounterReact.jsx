import { useState } from "react";

const CounterReact = () => {

const [counter, setCounter] = useState(15)

    // let counter = 15

    const addvalue = () => {
        // setCounter((prevCounter)=> prevCounter + 1)
        // setCounter(prevcounter => prevcounter + 1) // It is increased but not in bunch it takes previus value and then update 
        setCounter(counter+1) // It works as bunch t update ui or variables
        setCounter(counter+1)
        // console.log("Value added", Math.random(), counter);
        // counter = counter + 1    
        
    } 

    const removeValue = () => {
        setCounter(counter - 1)
    }

  return (
    <>
     <h1>Hello Welcome In React</h1> 
     <h2>Counter Value : {counter}</h2>
     <button onClick={addvalue}>Add Value {counter}</button>
     <br />
     <button onClick={removeValue}>Remove Value {counter}</button>
     <p>footer : {counter}</p>
    </>
  )
}

export default CounterReact
