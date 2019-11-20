import React from "react";
import "./Button.css";

const Button = function(props) {
  return (
    <button className={props.color} onClick={props.onButtonClick}>
      {props.children || props.text}
    </button>
  );
//   return (
//     <button style={{color: props.color}}>
//       {props.children || props.text}
//     </button>
//   );
};

export default Button;
