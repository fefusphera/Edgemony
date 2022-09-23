import { createStore, combineReducers } from "redux";

const initialState = {
  tasks: {
    task: "",
    tasklist: [],
  },
  //   miaomiao: {
  //     value: "",
  //     pippo: "",
  //   },
};

function todoReducer(state = {}, action) {
  switch (action.type) {
    case "SET_TASK_LIST":
      return { ...state, tasklist: [...state.tasklist, action.payload] };
    case "SET_TASK":
      return { ...state, task: action.payload };
    case "DELETE":
      return {
        ...state,
        tasklist: [...state.tasklist].filter(
          (_, index) => index !== action.payload
        ),
      };
    default:
      return state;
  }
}

// function miaomiaoReducer(state = {}, action) {
//   switch (action.type) {
//     case "MIAO_MIAO":
//       return {};
//   }
// }

const rootReducers = combineReducers({
  tasks: todoReducer,
  //   miaomiao: miaomiaoReducer,
});

const store = createStore(rootReducers, initialState);

export default store;
