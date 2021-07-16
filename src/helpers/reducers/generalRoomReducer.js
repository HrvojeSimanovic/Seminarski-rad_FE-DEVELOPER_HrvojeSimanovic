import {
  MEMBERS,
  ADD_MESSAGE,
  MEMBER_JOIN,
  MEMBER_LEAVE,
} from "../actions/action_types";

const initialState = {
  messages: [],
  members: [],
  currentRoom: "general",
};

const generalRoomReducer = (state = initialState, action) => {
  switch (action.type) {
    case MEMBERS:
      return {
        ...state,
        members: [...action.payload],
      };

    case MEMBER_JOIN:
      return {
        ...state,
        members: [...state.members, action.payload],
      };

    case MEMBER_LEAVE:
      return {
        ...state,
        members: [...action.payload],
      };

    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };

    default:
      return state;
  }
};

export default generalRoomReducer;
