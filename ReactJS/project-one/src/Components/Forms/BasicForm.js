import React, { Component } from 'react'

export class BasicForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'',
         mobile:'',
         city:''
      }
    }
    changeNameHandler=(e)=>{
        this.setState({name:e.target.value})
        //console.log(e.target.value)
    }
    changeMobileHandler=(e)=>{
        this.setState({mobile:e.target.value})
        //console.log(e.target.value)
    }
    changeCityHandler=(e)=>{
        this.setState({city:e.target.value})
        //console.log(e.target.value)
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state)
    }
  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
            Name:<input type="text" placeholder='Enter Name' 
            defaultValue={this.state.name} onChange={this.changeNameHandler}/>
            <br/>
            Mobile:<input type="text" placeholder='Enter Mobile' 
            defaultValue={this.state.mobile} onChange={this.changeMobileHandler}/>
            <br/>
            City:<select defaultValue={this.state.city} 
             onChange={this.changeCityHandler}>
                <option value="">--select--</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Chennai">Chennai</option>
                <option value="Delhi">Delhi</option>
            </select>
            <br/>
            <input type="submit"/>
          </form>
      </div>
    )
  }
}

export default BasicForm