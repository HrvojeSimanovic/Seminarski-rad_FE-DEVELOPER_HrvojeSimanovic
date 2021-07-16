import { MEMBERS } from "./action_types";

export const membersAction = (member) => {
  return (dispatch) => {
    dispatch({
      type: MEMBERS,
      payload: member,
    });
  };
};
