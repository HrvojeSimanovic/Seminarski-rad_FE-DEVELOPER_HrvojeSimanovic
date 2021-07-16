import { combineReducers } from "redux";
import setLoginNameReducer from "./setLoginNameReducer";
import generalRoomReducer from "./generalRoomReducer";

const allReducers = combineReducers({
  loginName: setLoginNameReducer,
  generalRoom: generalRoomReducer,
});

export default allReducers;
