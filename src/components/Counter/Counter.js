import React from "react";


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleButtonClick = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter + 1 });
  };

  handleButtonClickDown = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    let counter = this.state.counter;
    let color;
    let colorRed = { color: "red" };
    let colorBlue = { color: "blue" };
    if (counter > 0) {
      color = colorBlue;
    } else if (counter < 0) {
      color = colorRed;
    }

    return (
      <div>
        <h4 style={color}>{this.state.counter}</h4>
        <br />
        <a href="*" onClick={this.handleButtonClick}>
          +Click+Me+
        </a>
        <br />
        <br />
        <a href="*" onClick={this.handleButtonClickDown}>
          -Click-Me-
        </a>
      </div>
    );
  }
}

export default Counter;