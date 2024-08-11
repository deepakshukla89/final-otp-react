// reducer.js
import { combineReducers } from "redux";
import { loginReducer } from "./login/loginReduicer";

const rootReducer = combineReducers({
  login: loginReducer,
});

export default rootReducer;
