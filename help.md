Binding event handler

1) Bind in the event call
<button onClick = "{this.invokeMethod.bind(this)}">Click</button>

2) Bind in the constructor

constructor(){
    super();
    this.invokeMethod = this.invokeMethod.bind(this);
}

3) <button onClick = "{()=>this.invokeMethod()}">Click</button>

4) Use arrow function for handler.
invokeMethod = ()=>{

}