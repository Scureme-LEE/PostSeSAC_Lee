import React,{useState} from "react";

const Counter=()=>{
    const [counter, setCounter]=useState(0);
    const [intervalID, setIntervalID]=useState(null);

    const increment=()=>{
        const ID=setInterval(()=>setCounter(counter=>counter+1),40);
        setIntervalID(ID);
    };
        
    const decrement=()=>{
        if (counter>0){
            const ID=setInterval(()=>setCounter(counter=>counter-1),40);
            setIntervalID(ID);
        };
    };

    const stop=()=>{
        clearInterval(intervalID);
        setIntervalID(null);
    };
    const reset=()=>setCounter(0);

    return (
        <>
        <h1>카운터</h1>
        <button onMouseDown={decrement} onMouseUp={stop}>-</button>
        <h2>{counter}</h2>
        <button onMouseDown={increment} onMouseUp={stop}>+</button> 
        <button onClick={reset}>리셋</button>      
        </>
    );
};

export default Counter;