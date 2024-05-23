import React from 'react'
import { useDispatch } from 'react-redux'
import {increment,decrement,setCounter,resetCounter } from '../Store/counterSlice';
const CounterButtons = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
            <button onClick={()=>dispatch(setCounter(3))}>Set Custom</button>
            <button onClick={()=>dispatch(resetCounter())}>Reset</button>
        </div>
    )
}

export default CounterButtons