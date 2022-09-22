import { createStore, combineReducers } from "redux";

export const initState = {
  count: {
    value: 0,
    default: 100,
  },
  user: {
    userName: "",
  },

  darkmode: {
    value: false,
  },
};

function countReducer(state = {}, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, value: state.value + 1 };
    case "DECREMENT":
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
}

function userReducer(state = {}, action) {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, userName: action.payload };
    default:
      return state;
  }
}

function darkModeReducer(state = {}, action) {
  switch (action.type) {
    case "SET_DARK_MODE":
      // console.log("ciao");
      return { ...state, value: !state.value };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  count: countReducer,
  user: userReducer,
  darkmode: darkModeReducer,
});
const store = createStore(rootReducer, initState);

export default store;
