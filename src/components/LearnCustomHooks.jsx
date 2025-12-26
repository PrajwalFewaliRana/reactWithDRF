import React from 'react'
import useCounter from '../hooks/useCounter'
const LearnCustomHooks = () => {
    const {count,increment,decrement,reset}=useCounter(5)
  return (
    <>
      <h1>Custom Hooks</h1>
      <h2>Count:{count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={reset}>reset</button>
      <button onClick={decrement}>decrement</button>

    </>
  )
}

export default LearnCustomHooks