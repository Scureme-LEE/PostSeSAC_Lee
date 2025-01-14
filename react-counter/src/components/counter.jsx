import React,{useState} from "react";

const Counter=()=>{
    const [counter, setCounter]=useState(0);
    const increment=()=>setCounter(counter+1);
    const decrement=()=>setCounter(counter-1);

    return (
        <>
        <h1>카운터</h1>
        <button onClick={decrement}>-</button>
        <h2>{counter}</h2>
        <button onClick={increment}>+</button>        
        </>
    );
};

export default Counter;