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
        <div style={{textAlign:'center',position:'realative'}}>
            <h1>카운터</h1>
            <div style={{display: 'flex', alignItems:'center', justifyContent:'center', gap:'10px'}}>
                <button onMouseDown={decrement} onMouseUp={stop}>-</button>
                <h2>{counter}</h2>
                <button onMouseDown={increment} onMouseUp={stop}>+</button> 
            </div>
            <button onClick={reset} style={{position:'absolute',marginTop:'30px',right:'30%'}}>리셋</button>      
        </div>
    );
};

export default Counter;