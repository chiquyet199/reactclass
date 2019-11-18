import React from "react";
import "./Button.css";

const Button = function(props) {
  return (
    <button style={{color: props.color}}>
      {props.children || props.text}
    </button>
  );
};

export default Button;
