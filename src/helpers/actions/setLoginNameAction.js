import { SET_LOGIN_NAME } from "./action_types";

export const setLoginName = (loginName) => {
  return (dispatch) => {
    dispatch({
      type: SET_LOGIN_NAME,
      payload: loginName,
    });
  };
};
