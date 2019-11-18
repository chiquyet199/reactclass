import React from 'react';
import Button from './components/Button/Button.js'
import './App.css';

function App() {
  return (
    <div className="App">
      WELL COME TO REACT CLASS
      <Button color="blue">Hello</Button>
      <Button color="white">XinChao</Button>
      <Button color="red" text="XinChao"/>
    </div>
  );
}

export default App;
