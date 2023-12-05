import React from 'react'
import './style.css'

function CSSDemo1(props) {
    var cssClassName=props.status?'success':'error'
  return (
    <div>
        <h1 className={cssClassName}>Sample Text</h1>
    </div>
  )
}

export default CSSDemo1