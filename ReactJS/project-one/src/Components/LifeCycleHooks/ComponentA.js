import React, { Component } from 'react'
import ComponentB from './ComponentB'

export class ComponentA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userid:'Guest'
      }
      console.log('----------Parent Constructor-------------')
    }

    static getDerivedStateFromProps(props,state)
    {
        console.log('----------Parent getDerivedStateFromProps-------------')
        return null;
    }

    componentDidMount()
    {
        console.log('----------Parent componentDidMount-------------')
    }
    shouldComponentUpdate(nextProps,nextState)
    {
        console.log('----------Parent shouldComponentUpdate-------------')
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log('----------Parent getSnapshotBeforeUpdate-------------')
        return null;
    }
    componentDidUpdate()
    {
        console.log('----------Parent componentDidUpdate-------------')
    }
 
    changeUserId=()=>{
        this.setState({userid:'Admin'})
    }

  render() {
    console.log('----------Parent render-------------')
    return (
      <div>
        <h1>{this.state.userid}</h1>
        <br/>
        <button onClick={this.changeUserId}>Update UserID</button>
        <br/>
        ComponentA
        <ComponentB/>
      </div>
    )
  }
}

export default ComponentA