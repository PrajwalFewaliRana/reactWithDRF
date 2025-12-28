import React, { useState } from 'react'

const LearnForm = () => {
    // const [firstName,setFirstName] = useState('')
    // const [lastName,setLastName] = useState('')
    const [formData,setFormData]= useState({
        firstName:'',
        lastName:''
    })
  return (
    <>
      {/* <form action="">
        First name: <input type='text' onChange={(e)=>setFirstName(e.target.value)} name='firstName' value={firstName} />
        <br />
        Last Name: <input type="text" onChange={(e)=>setLastName(e.target.value)} name='LastNaem' value={lastName} />
        <h1>{firstName} {lastName}</h1>
      </form> */}

      <form action="" onSubmit={(e)=>{e.preventDefault(),console.log("form submitted",formData)}}>
        First name: <input type='text' onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})} name='firstName' value={formData.firstName} />
        <br />
        Last Name: <input type="text" onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})} name='lastName' value={formData.lastName} />
        <h1>{formData.firstName} {formData.lastName}</h1>
        <input type="submit" value='submit' />
      </form>
    </>
  )
}

export default LearnForm