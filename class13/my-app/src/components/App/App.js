import React from "react";
import Button from "../Button/Button"
import Counter from "../Counter/Counter";
import Toggle from "../Toggle/Toggle";
import Text from "../Text/Text";
import TextUpperCase from "../TextUpperCase/TextUpperCase";
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

      <Text uppercase value="Hello" color="blue" />
      <Text  value="Hi" color="red" />
      <Text  value="Xin Chao" color="green" />
      <Text  value="HAHAHAHA" color="#ff00cc" />

      <TextUpperCase value="Xin Chao" color="green"/>

      <div style={{ padding: 20 }} />
      <Counter step={2}/>
      <Counter startValue={0}/>

      <div style={{ padding: 20 }} />
      <Toggle on/>
      <Toggle/>

      {/* <Text uppercase value="Hello" color="blue" />
      <p>Hello</p>

      <Dropdown options={['option1', 'option2']} placeholder="Please select .." defaultValue="option1"/>
      <Dropdown options={['option1', 'option2']} placeholder="Please select .." /> */}

    </div>
  );
}

export default App;
