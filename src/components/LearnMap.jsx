import React from 'react'

const LearnMap = () => {
  const names = ['Rathan','John','Bob','David']
  return (
    <>
      <h1>Map Function</h1>
      <ul>
        {names.map((name,i)=>(
          <li key={i}>{name}</li>
        ))}
      </ul>
    </>
  )
}

export default LearnMap