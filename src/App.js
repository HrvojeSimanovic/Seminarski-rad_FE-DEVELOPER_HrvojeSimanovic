import React, { Component } from "react";

import "./App.css";
import Chat from "./components/Chat";
import Login from "./components/Login";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginName: false,
    };
  }

  dispatch = ({ type, payload }) => {
    switch (type) {
      case "LOGGING": {
        return this.setState({
          loginName: payload,
        });
      }
      default:
        return this.state;
    }
  };

  render() {
    return (
      <div className="App">
        <div className="app_welcome">
          {this.state.loginName ? (
            <div className="app_chat">
              <Chat userName={this.state.loginName} />
            </div>
          ) : (
            <Login dispatch={this.dispatch} />
          )}
        </div>
      </div>
    );
  }
}
