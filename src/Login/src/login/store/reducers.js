//import redux module
import thunk from "redux-thunk";
import {applyMiddleware, combineReducers } from "redux";
//declare our initial object
const initialState = {
  login: {
    username: "",
    password: ""
  },
  signup: {
    email: "",
    password: "",
    confirmPassword: "",
    message : "",
    redirect : ""
  },
  forgotPassword: {
    email: ""
  }
};

/**
 * login reducer set username and
 * password from user entry
 *
 * @param {*} state
 * @param {*} action
 * @returns {*} state
 */
const login = (state = { ...initialState.login }, action) => {
  if (action.type === "TYPING_USERNAME") {
    state.username = action.value;
    return { ...state };
  }

  if (action.type === "TYPING_PASSWORD") {
    state.password = action.value;
    return { ...state };
  }

  if (action.type === "SHOW_USERNAME") {
    state.username = action.username;
    return { ...state };
  }
  return state;
};

/**
 * signup to set new user data
 * @param {*} state
 * @param {*} action
 */
const signup = (state = { ...initialState.signup }, action) => {
  switch (action.type) {
    case "TYPING_EMAIL":
      state.email = action.value;
      return { ...state };
    case "TYPING_PASSWORD":
      state.password = action.value;
      return { ...state };
    case "TYPING_PASSWORD_CONFIRMATION":
      state.confirmPassword = action.value;
      return { ...state };
    case "ALERT_MESSAGE" :
      state.message = action.message;
      return {...state};
    case "FECTCHED_DATA" :
      state.message = "wait you will redirect soon..";
      state.redirect = "/";
      return {...state}
    case "FETCHING_ERROR" :
      state.message = "Please Re signedUp Something went wrong";
      return {...state}
    default:
      return state;
  }
};

/**
 * forgot password
 * @param {*} state
 * @param {*} action
 */
const forgotPassword = (state = { ...initialState.forgotPassword }, action) => {
  switch (action.type) {
    case "TYPING_EMAIL":
      state.Email = action.value;
      return { ...state };
    default:
      return state;
  }
};
//middleware thunk 
export const middleware = applyMiddleware(thunk);

//lets combine All reducers 
//in a big one 
export default combineReducers({
  login,
  signup,
  forgotPassword
});
