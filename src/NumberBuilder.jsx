import React from "react";
import { useState } from 'react'

// React component that builds string of numbers that represent 
// how many times add numbers button pressed; reset clears


export const NumberBuilder = () => {
    let [count, setCount] = useState (1);
    let [numbers, setNumbers] = useState ('');
    const addNumber = () => {
        setCount(count+1);
        setNumbers(numbers + count);
    };

    const resetCount = () => {
        setCount(1); 
        setNumbers('');
    };

    return (
        <>
            <button onClick = {addNumber}>Add Number</button>
            <button onClick = {resetCount}>Reset</button>
            <br></br>
            Numbers: {numbers}
        </>
    )
}