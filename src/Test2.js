import React, { Component } from 'react'

export class Test2 extends Component {

    print(){
        console.log('Clicked from rce!')
    }
  render() {
    return (
      <div>
        <button onClick={this.print}>Click Me!</button>
      </div>
    )
  }
}

export default Test2
