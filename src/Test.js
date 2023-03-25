
import React from 'react'


function Test() {
    function clickHandler(){
        console.log("clicked!")
    }
  return (
    <div>
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default Test
