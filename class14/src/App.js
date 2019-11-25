import React from "react";
import Product from "./components/Product/Product";

function App() {
  return (
    <div className="App">
      <h1>Class 14</h1>
      <Product name="Vietnamese Scallop" isSale oldPrice={200000} newPrice={130000} imgUrl="http://www.junedarville.com/wp-content/uploads/2015/09/P1050762.jpg" />
    </div>
  );
}

export default App;
