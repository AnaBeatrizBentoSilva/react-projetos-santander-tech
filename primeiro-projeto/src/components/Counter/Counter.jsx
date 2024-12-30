import React from "react";
import "./styles.css";

export class Counter extends React.Component {
  constructor() {
    super();
    this.state = { contador: 0 };
  }

  render() {
    return (
      <div className="counter-wrapper">
        <div className="counter-container">
          <h1 className="counter-value">{this.state.contador}</h1>
          <div className="button-container">
            <button
              className="counter-button decrease-button"
              onClick={() =>
                this.setState({ contador: this.state.contador - 1 })
              }
            >
              Diminuir
            </button>
            <button
              className="counter-button increase-button"
              onClick={() =>
                this.setState({ contador: this.state.contador + 1 })
              }
            >
              Aumentar
            </button>
          </div>
        </div>
      </div>
    );
  }
}
