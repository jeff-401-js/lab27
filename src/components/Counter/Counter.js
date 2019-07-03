import React from 'react';


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleButtonClick = (e) => {
    e.preventDefault();
    this.setState({ counter: this.state.counter + 1 });
  };

  handleButtonClickDown = (e) => {
    e.preventDefault();
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    // eslint-disable-next-line prefer-destructuring
    const counter = this.state.counter;
    let color;
    const colorRed = { color: 'red' };
    const colorBlue = { color: 'blue' };
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
