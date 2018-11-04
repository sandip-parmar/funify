import { combineReducers } from "redux";
import login from "./reducers/login";
import spotify from "./reducers/spotify";
import home from "./reducers/home";
import data from "./reducers/data";
import { reducer as formReducer } from "redux-form";

// combine all reducers and create single object
const myStore = combineReducers({
  login,
  spotify,
  form: formReducer,
  home,
  data
});

export default myStore;
