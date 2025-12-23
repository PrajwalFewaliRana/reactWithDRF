import React, { useState } from "react";

const LearnUseState = () => {
  const [num, setNum] = useState(5);
  const handleNum = () => {
    setNum(num +5);
  };

  const updateStockPrice =()=>{
    setStockPrice({...stockPrice,price:200})
  }

  const [stockPrice,setStockPrice]= useState({stock:"apple",price:100})
  return (
    <>
      <h1>Number: {num}</h1>
      <button onClick={handleNum}>Click Here</button>
      <hr />
      <h2>{stockPrice.stock}:{stockPrice.price}</h2>
      <button onClick={updateStockPrice}>Click me</button>
    </>
  );
};

export default LearnUseState;
