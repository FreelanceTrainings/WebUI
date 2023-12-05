import React from 'react'

function PChild(props) {
  return (
    <div>
        <button onClick={props.handler}>Increment</button>
    </div>
  )
}

export default PChild