import React from 'react'
import { useSelector } from 'react-redux'

const CounterComp = () => {
    const count = useSelector(state=>state.counter.value);
    const wholeState = useSelector(state=>state);
    console.log(wholeState)
    
  return (
    <div>
        <p>{count}</p>
    </div>
  )
}

export default CounterComp