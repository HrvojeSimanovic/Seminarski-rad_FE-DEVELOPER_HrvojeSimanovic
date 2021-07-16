import React, { Component } from "react";
import { connect } from "react-redux";
import {
  MEMBERS,
  ADD_MESSAGE,
  MEMBER_JOIN,
  MEMBER_LEAVE,
} from "../helpers/actions/action_types";

import Header from "./Header";
import MainFeed from "./MainFeed";
import ListOfUsers from "./ListOfUsers";
import Rooms from "./Rooms";
import InputNewMessage from "./InputNewMessage";
import LogOut from "./LogOut";

class Chat extends Component {
  constructor(props) {
    super(props);
  }

  dispatch = ({ type, payload }) => {
    switch (type) {
      case "PUBLISH": {
        return this.drone.publish({
          room: "observable-general",
          message: payload,
        });
      }
      default:
        return;
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

      this.room.on("members", (member) => {
        this.props.membersAction({
          type: MEMBERS,
          payload: member,
        });
      });

      this.room.on("member_join", (member) => {
        this.props.memberJoinAction({
          type: MEMBER_JOIN,
          payload: member,
        });
      });

      this.room.on("member_leave", ({ id }) => {
        const filteredMembers = this.props.members.filter((member) => {
          return member.id !== id;
        });
        this.props.memberLeaveAction({
          type: MEMBER_LEAVE,
          payload: filteredMembers,
        });
      });

      this.room.on("data", (data, member) => {
        this.props.addMessageAction({
          type: ADD_MESSAGE,
          payload: { data, member },
        });
      });
    });

    this.room = this.drone.subscribe("observable-general");

    this.room.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
    });
  }

  render() {
    return (
      <>
        <Header />
        <ListOfUsers />
        <Rooms />
        <MainFeed />
        <InputNewMessage dispatch={this.dispatch} />
        <LogOut />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userName: state.loginName.loginName,
    members: state.generalRoom.members,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    membersAction: (data) => {
      dispatch({ type: MEMBERS, payload: data.payload });
    },
    addMessageAction: (data) => {
      dispatch({ type: ADD_MESSAGE, payload: data.payload });
    },
    memberJoinAction: (data) => {
      dispatch({ type: MEMBER_JOIN, payload: data.payload });
    },
    memberLeaveAction: (data) => {
      dispatch({ type: MEMBER_LEAVE, payload: data.payload });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
