import React, {useState} from "react";

const Counter=()=>{
    const[count,setCount]=useState(0);
    const Increment=()=>
    {
        setCount(count+1);
    }
    const decrement=()=>
    {
        setCount(count-1);
    }
    return(
        <>
        <button onClick={Increment}>+</button>
        <label>{count}</label>
        <button onClick={decrement}>-</button>
        </>
    );
}
export default Counter;