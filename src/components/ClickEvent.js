import React, { Component } from 'react'

 class ClickEvent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: "hello"
      }
     
    }
    
  changeMessage= ()=>{
    this.setState({ message: "Goodbye!" })
  }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.changeMessage}>Click here!</button>
      </div>
    )
  }
}

export default ClickEvent
