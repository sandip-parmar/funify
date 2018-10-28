import { combineReducers } from "redux";
import login from "./reducers/login";
import { reducer as formReducer } from "redux-form";

// combine all reducers and create single object
const myStore = combineReducers({
  login,
  form: formReducer
});

export default myStore;
