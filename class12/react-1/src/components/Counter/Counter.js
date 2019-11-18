import React from "react";
import Button from "../Button/Button";

class Counter extends React.Component {
  state = {
    count: this.props.startValue || 0
  };

  onCountButtonClick = () => {
    const step = this.props.step || 1;
    this.setState({ count: this.state.count + step });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <Button onButtonClick={this.onCountButtonClick} color="blue">
          Count
        </Button>
      </div>
    );
  }
}

export default Counter;
