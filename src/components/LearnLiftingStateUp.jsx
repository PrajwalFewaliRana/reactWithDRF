import React from 'react'

const LearnLiftingStateUp = (props) => {
    const handleClick =()=>{
        const stock ='apple'
        props.getStock(stock)
        
    }

  return (
    <>
      <h1>Lifting State Up</h1>
      <button onClick={handleClick}>Click me</button>
      
    </>
  )
}

export default LearnLiftingStateUp