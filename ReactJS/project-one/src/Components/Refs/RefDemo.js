import React, { Component } from 'react'

export class RefDemo extends Component {
    constructor(props) {
      super(props)
      this.nameref=React.createRef()
    }
    componentDidMount()
    {
        console.log(this.nameref.current)
        this.nameref.current.placeholder='Enter Name Here'
        this.nameref.current.focus()
    }
    clickHandler=()=>{
        alert(this.nameref.current.value)
    }
  render() {
    return (
      <div>
        <input type="text" name="txtName" ref={this.nameref}/>
        <br/>
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    )
  }
}

export default RefDemo