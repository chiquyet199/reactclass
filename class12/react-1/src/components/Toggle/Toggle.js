import React from "react";
import "./Toggle.css";

class Toggle extends React.Component {
  state = {
    active: this.props.on || false
  };

  handleOnClick = () => {
    this.setState({
      active: !this.state.active
    });
  };

  render() {
    const { active } = this.state;
    // const active = this.state.active
    return (
      <div className={active ? "Toggle on" : "Toggle"} onClick={this.handleOnClick}>
        {active ? "ON" : "OFF"}
      </div>
    );
  }
}

export default Toggle;
