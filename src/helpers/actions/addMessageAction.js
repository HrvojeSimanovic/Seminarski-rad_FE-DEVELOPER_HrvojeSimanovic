import { ADD_MESSAGE } from "./action_types";

export const addMessageAction = (messageData) => {
  return (dispatch) => {
    dispatch({
      type: ADD_MESSAGE,
      payload: messageData,
    });
  };
};
