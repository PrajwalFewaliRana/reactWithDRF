import React from 'react'

const LearnInlineCSS = () => {
    const style ={
        container:{
            backgroundColor:'red',
            height:'100px',
            width:'100px'
        }
    }
  return (
    <>
      <style>
        {`
          .container{
           background-color:#00ff00;
           height:100px;
           width:100px;
          }
        `}
      </style>
      <p style={{fontSize:'20px',color:'blue'}}>Hello,this is a paragraph</p>
      <div style={style.container}></div>
      <h1>Internal CSS</h1>
      <div className='container'></div>
    </>
  )
}

export default LearnInlineCSS