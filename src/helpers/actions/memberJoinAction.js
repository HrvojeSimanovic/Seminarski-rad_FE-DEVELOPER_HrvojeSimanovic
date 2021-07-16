import { MEMBER_JOIN } from "./action_types";

export const memberJoinAction = (member) => {
  return (dispatch) => {
    dispatch({
      type: MEMBER_JOIN,
      payload: member,
    });
  };
};
