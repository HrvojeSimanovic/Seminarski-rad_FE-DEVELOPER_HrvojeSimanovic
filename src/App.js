import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import Chat from "./components/Chat";
import Login from "./components/Login";

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="App">
        <div className="app_welcome">
          {this.props.loginName.loginName ? (
            <div className="app_chat">
              <Chat userName={this.props.loginName.loginName} />
            </div>
          ) : (
            <Login />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loginName: state.loginName,
  };
};

export default connect(mapStateToProps)(App);
