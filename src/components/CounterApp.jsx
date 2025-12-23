import React, { useState } from 'react'

const CounterApp = () => {
    const [count,setCount]= useState(0)
    const handleIncrease=()=>{
      setCount(prev=> prev+1)
    }
    const handleDecrease=()=>{
      setCount(prev=>prev-1)
    }
    const handleReset=()=>{
      setCount(0)
    }
  return (
    <>
     <h1>Counter App</h1>
     <h2>Count:{count}</h2>
     <button onClick={handleIncrease}>Increase Count</button>
     <button onClick={handleReset}>Reset</button>
     <button onClick={handleDecrease}> Decrease Count</button>
    </>
  )
}

export default CounterApp