import { SET_LOGIN_NAME } from "../actions/action_types";

const initialState = {
  loginName: false,
};

const setLoginNameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_NAME:
      return {
        ...state,
        loginName: action.payload,
      };

    default:
      return state;
  }
};

export default setLoginNameReducer;
