import React from 'react'

function ProductComponent(props) {
   if(props.category!="Beverages")
   {
        throw new Error("Invalid Product Category")
   }
  return (
    <div>
        <h1>
            Id:{props.id}<br/>
            Name:{props.name}
        </h1>
        <hr/>
    </div>
  )
}

export default ProductComponent