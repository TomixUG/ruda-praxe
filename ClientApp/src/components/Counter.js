import React, { Component } from "react";

export class Counter extends Component {
  static displayName = Counter.name;

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1,
    });
  }

  render() {
    return (
      <div>
        <h1>Tatranka</h1>

        <p>Toto počítá počet tatranek 😋</p>

        <p aria-live="polite">
          Počet tatranek na skladu: <strong>{this.state.currentCount}</strong>
        </p>

        <button className="btn btn-primary" onClick={this.incrementCounter}>
          Přidat na sklad
        </button>
      </div>
    );
  }
}
