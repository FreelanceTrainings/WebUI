import React, { Component } from 'react'
import ChildComponentDemo from './ChildComponentDemo';

export class ParentComponentDemo extends Component 
{
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Steve'
      }
    }
    componentDidMount()
    {
        setInterval(() => {
            this.setState({name:'Steve'})
        }, 2000);
    }
  render() {
    console.log("--------------Parent Component----------------")
    return (
      <div>
        ParentComponentDemo
        <ChildComponentDemo name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComponentDemo