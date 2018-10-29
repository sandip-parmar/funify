import { combineReducers } from "redux";
import login from "./reducers/login";
import spotify from "./reducers/spotify";
import { reducer as formReducer } from "redux-form";

// combine all reducers and create single object
const myStore = combineReducers({
  login,
  spotify,
  form: formReducer
});

export default myStore;
