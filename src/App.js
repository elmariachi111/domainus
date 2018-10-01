import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.min.css";
const tlds = require("./tld.json").tlds;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      domain: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(evt) {
    console.dir(evt);
    this.setState({ domain: evt.target.value });
  }

  render() {
    const domains = tlds.map(tld => (
      <li key={`tld-${tld}`}>
        {this.state.domain}.{tld}
      </li>
    ));

    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Such Dich Domain</h1>
          <div className="columns">
            <div className="column is-one-third">
              <div className="field">
                <div className="control">
                  <input
                    className="input is-primary"
                    type="text"
                    placeholder="Primary input"
                    value={this.state.domain}
                    onChange={this.onChange}
                  />
                </div>
              </div>
            </div>
            <div className="column">
              <ul>{domains}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
