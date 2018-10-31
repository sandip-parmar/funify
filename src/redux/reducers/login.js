import { EMPLOYEE_LOGIN } from "../actions/login";
import { initialState } from "../intialState";

function changeAuth(auth, employee) {
  return Object.assign({}, auth, {
    employee: employee,
    isAuthenticated: true
  });
}

const login = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEE_LOGIN:
      return Object.assign({}, state, {
        authentication: changeAuth(state.authentication, action.employee)
      });

    default:
      return state;
  }
};

export default login;
