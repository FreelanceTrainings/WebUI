import React from 'react'

function ChildComponentDemo(props) {
    console.log("--------------Child Component----------------")
  return (
    <div>
        Name:{props.name}
    </div>
  )
}

export default React.memo(ChildComponentDemo)