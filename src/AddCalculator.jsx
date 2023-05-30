import React from "react";
import { useState } from 'react';

export const AddCalculator = () => {
    const [total, setTotal] = useState(0);
    const clickButton1 = () => {
        setTotal(total + 1);
    }
    const clickButton2 = () => {
        setTotal(total + 2);
    }
    const clickButton3 = () => {
        setTotal(total + 3);
    }

    return (
        <>
            <button onClick = {clickButton1}>Add 1</button>
            <button onClick = {clickButton2}>Add 2</button>
            <button onClick = {clickButton3}>Add 3</button>
            <br></br>
            Total: {total}
        </>
    )
}