import { MEMBER_LEAVE } from "./action_types";

export const memberLeaveAction = (memberId) => {
  return (dispatch) => {
    dispatch({
      type: MEMBER_LEAVE,
      payload: memberId,
    });
  };
};
