import React, { Component } from 'react'

export class RegularComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'John'
      }
    }
    componentDidMount()
    {
        setInterval(()=>{
            this.setState({name:'John'})
        },2000)
    }
  render() {
    console.log('----------Regular Component--------------')
    return (
      <div>RegularComponent</div>
    )
  }
}

export default RegularComponent