import React from "react";
import Text from '../Text/Text';

const TextUpperCase = props => {
  return (
    <Text uppercase value={props.value} color={props.color}/>
  );
};

export default TextUpperCase;
