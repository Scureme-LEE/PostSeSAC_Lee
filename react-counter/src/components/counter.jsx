import React from "react";

const Counter=()=>{
    return (
        <>
        <h1>카운터</h1>
        <button>-</button>
        <h2>{{counter}}</h2>
        <button>+</button>        
        </>
    );
};

export default Counter;