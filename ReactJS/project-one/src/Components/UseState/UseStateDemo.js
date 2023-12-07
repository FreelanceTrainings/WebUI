import React, { useState } from 'react'

function UseStateDemo() {
    const[name,setName]=useState('Guest')
    const changeName=()=>{
            setName('Admin')
    }
  return (
    <div>
        <h1>Name:{name}</h1>
        <button onClick={changeName}>Change Name</button>
    </div>
  )
}

export default UseStateDemo