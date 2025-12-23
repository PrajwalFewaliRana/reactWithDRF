import React, { useEffect, useState } from 'react'

const LearnUseEffect = () => {
    const [count,setCount] = useState(0)
    const [random,setRandom]= useState(0)

    const handleInc=()=>{
        setCount(count+1)
    }

    const handleRand=()=>{
        setRandom(Math.floor(Math.random()*100))
    }

    useEffect(()=>{
      console.log("UseEffect Called")

      return ()=>{
        console.log("cleanup function is called")
      }
    },[count])
  return (
    <>
      <h1>Count:{count}</h1>
      <button onClick={handleInc} >Increase</button>
      <hr />
      <h1>Random NUM: {random}</h1>
      <button onClick={handleRand}>Generate Random</button>
    </>
  )
}

export default LearnUseEffect