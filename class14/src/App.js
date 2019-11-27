import React from "react";
import Product from "./components/Product/Product";
import RatingStar from "./components/RatingStar/RatingStar";

function App() {
  return (
    <div className="App">
      <h1>Class 14</h1>
      <RatingStar />
      <RatingStar initValue={3}/>
      <RatingStar initValue={5} numsOfStar={8}/>
      <Product name="Vietnamese Scallop" isSale oldPrice={200000} newPrice={130000} imgUrl="http://www.junedarville.com/wp-content/uploads/2015/09/P1050762.jpg" />
    </div>
  );
}

export default App;
