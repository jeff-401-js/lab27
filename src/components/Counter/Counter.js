import React from 'react';
import './counter.scss';

/**
 * Counter class which counts up or down
 */
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  /**
 * increases counter
 */
  handleButtonClickUp = (e) => {
    e.preventDefault();
    this.updateCounter(this.state.counter + 1);
    // this.setState({ counter: this.state.counter + 1 });
  };

  /**
   * decreases counter
   */
  handleButtonClickDown = (e) => {
    e.preventDefault();
    this.updateCounter(this.state.counter - 1);
    // this.setState({ counter: this.state.counter - 1 });
  };

  updateCounter(counter) {
    let polarity = '';

    if (counter > 0) {
      polarity = 'positive';
    } else if (counter < 0) {
      polarity = 'negative';
    }
    this.setState({ counter, polarity });
  }

  /**
   * renders counter
   */
  render() {
    const classes = ['count', this.state.polarity];

    return (
      <div className="counter">
        <h4 className={classes.join(' ')}>{this.state.counter}</h4>
        <br />
        <a className="up" href="*" onClick={this.handleButtonClickUp}>
          +Click+Me+
        </a>
        <br />
        <br />
        <a className="down" href="*" onClick={this.handleButtonClickDown}>
          -Click-Me-
        </a>
      </div>
    );
  }
}

export default Counter;
