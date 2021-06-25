import React, { Component } from "react";

import Header from "./Header";
import MainFeed from "./MainFeed";
import ListOfUsers from "./ListOfUsers";
import InputNewMessage from "./InputNewMessage";
import LogOut from "./LogOut";

export default class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      members: [],
    };
  }

  dispatch = ({ type, payload }) => {
    switch (type) {
      case "ADDING_MESSAGE": {
        return this.drone.publish({
          room: "observable-general_room",
          message: payload,
        });
      }
      default:
        return this.state;
    }
  };

  componentDidMount() {
    this.drone = new window.Scaledrone("SvFNUSE3xncMS6yt", {
      data: {
        name: this.props.userName,
      },
    });

    this.drone.on("open", (error) => {
      if (error) {
        return console.error(error);
      }

      this.room.on("members", (m) => {
        this.setState({ members: m });
      });

      this.room.on("member_join", (member) => {
        this.state.members.push(member);
      });

      this.room.on("member_leave", ({ id }) => {
        this.index = this.state.members.findIndex((member) => member.id === id);
        this.state.members.splice(this.index, 1);
      });
    });

    this.room = this.drone.subscribe("observable-general_room");

    this.room.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
    });

    this.room.on("message", (message) => {
      this.setState({
        messages: [...this.state.messages, message.data],
      });
    });
  }

  render() {
    return (
      <>
        <Header />
        <ListOfUsers ListOfUsers={this.state.members} />
        <MainFeed
          listOfMessages={this.state.messages}
          userName={this.props.userName}
        />
        <InputNewMessage
          dispatch={this.dispatch}
          userName={this.props.userName}
        />
        <LogOut />
      </>
    );
  }
}
