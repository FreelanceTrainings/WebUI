import React, { useEffect, useState } from 'react'

function UseEffectDemo() {
    const[count,setCount]=useState(0)
    const increment=()=>
    {
        setCount(count+1)
    }
    useEffect(()=>{
        console.log('Value is Incremented')
    },[count])
  return (
    <div>
        <h1>Count:{count}</h1>
        <br/>
        <button onClick={increment}>Increment</button>
    </div>
  )
}

export default UseEffectDemo