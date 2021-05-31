import React, { Component } from "react";

import "./App.css";
import Header from "./components/Header";
import MainFeed from "./components/MainFeed";
import InputNewMessage from "./components/InputNewMessage";
import Login from "./components/Login";
import LogOut from "./components/LogOut";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      loginName: false,
    };

    this.drone = new window.Scaledrone("SvFNUSE3xncMS6yt");

    this.drone.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
    });

    this.room = this.drone.subscribe("observable-general_room");

    this.room.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
    });
  }

  dispatch = ({ type, payload }) => {
    switch (type) {
      case "ADDING_MESSAGE": {
        return this.drone.publish({
          room: "observable-general_room",
          message: payload,
        });
      }
      case "LOGGING": {
        return this.setState({
          loginName: payload,
        });
      }
      default:
        return this.state;
    }
  };

  componentDidMount() {
    this.room.on("message", (message) => {
      this.setState({
        messages: [...this.state.messages, message.data],
      });
    });
  }

  componentDidUpdate() {}

  render() {
    return (
      <div className="App">
        <div className="app_welcome">
          {this.state.loginName ? (
            <div className="app_chat">
              <Header />
              <MainFeed
                listOfMessages={this.state.messages}
                userName={this.state.loginName}
              />
              <InputNewMessage
                dispatch={this.dispatch}
                userName={this.state.loginName}
              />
              <LogOut />
            </div>
          ) : (
            <Login dispatch={this.dispatch} />
          )}
        </div>
      </div>
    );
  }
}
