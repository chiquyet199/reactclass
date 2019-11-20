import React from "react";
import "./Text.css";

const Text = props => {
  const className = `Text ${props.uppercase ? "uppercase" : ""}`;
  return (
    <p style={{ color: props.color }} className={className}>
      {props.value}
    </p>
  );
};

export default Text;

{
  /* <Text uppercase color="blue" value="Hello"/> */
}
