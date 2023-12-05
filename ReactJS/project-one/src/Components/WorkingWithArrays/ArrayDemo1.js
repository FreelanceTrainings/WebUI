import React from 'react'

function ArrayDemo1() {
    const courses=['C','C++','Java','SQL']    
  return (
    <div>
        <ol>
            {
                courses.map((course,i)=>
                    <li key={i}>{course}</li>)
            }
        </ol>
    </div>
  )
}

export default ArrayDemo1