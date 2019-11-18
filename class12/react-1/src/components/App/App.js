import React from "react";
import Button from "../Button/Button.js";
import Counter from "../Counter/Counter.js";
import "./App.css";

function App() {
  let helloColor = 'blue'
  return (
    <div className="App">
      WELL COME TO REACT CLASS
      <Button onButtonClick={()=>{alert('You Clicked button Hello')}} color={helloColor}>Hello</Button>
      <Button onButtonClick={()=>{alert('HHAHAHAHAHA')}} color="white">XinChao</Button>
      <Button color="red" text="XinChao" />
      
      <div style={{ padding: 20 }} />
      <Counter step={2}/>
      <Counter startValue={4} step={3}/>
      <Counter startValue={0}/>
      <Counter startValue={7}/>
    </div>
  );
}

export default App;
