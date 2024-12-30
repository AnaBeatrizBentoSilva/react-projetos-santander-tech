import React from "react";
import "./styles.css";

export class Form extends React.Component {
  constructor() {
    super();
    this.state = { name: "", password: "" };
  }

  render() {
    return (
      <div className="form-wrapper">
        <form className="form-container">
          <input
            type="text"
            placeholder="Nome"
            className="form-input"
            value={this.state.name}
            onChange={(event) =>
              this.setState({ name: event.target.value })
            }
          />
          <input
            type="password"
            placeholder="Senha"
            className="form-input"
            value={this.state.password}
            onChange={(event) =>
              this.setState({ password: event.target.value })
            }
          />
          <button type="submit" className="form-button">
            Enviar
          </button>
        </form>
      </div>
    );
  }
}
