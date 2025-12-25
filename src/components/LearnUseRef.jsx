import React, { useState,useRef } from 'react'

const LearnUseRef = () => {
    const [name,setName]=useState('')

    const refElement = useRef('')
    const previousRef=useRef('')

    const clearText =()=>{
        setName("")
        refElement.current.focus()
    }
  return (
    <>
      <h1>Learn useRef</h1>
      <input ref={refElement} type="text" value={name} onChange={(e)=>{previousRef.current=name;setName(e.target.value)}} />
      <button onClick={clearText}>Clear</button>
      {/* <h1>{name}</h1> */}
      <p>previousText:{previousRef.current}</p>
    </>
  )
}

export default LearnUseRef