import React, { Component } from 'react'
import PChild from './PChild'

export class PParent extends Component {
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
  render() {
    return (
      <div>
        Count:{this.state.counter}
        <PChild handler={this.increment.bind(this)}/>
      </div>
    )
  }
}

export default PParent