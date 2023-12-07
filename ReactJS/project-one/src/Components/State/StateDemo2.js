import React, { Component } from 'react'

export class StateDemo2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         counter:0
      }
    }

    increment()
    {
        this.setState({counter:this.state.counter+1})
       
    }
    decrement()
    {
        this.setState({counter:this.state.counter-1})
    }
  render() {
    return (
      <div>
        <h1>Count:{this.state.counter}</h1>
        <button onClick={()=>this.decrement()}>Decrement</button>
        <button onClick={()=>this.increment()}>Increment</button>
      </div>
    )
  }
}

export default StateDemo2