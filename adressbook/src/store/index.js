import { createStore, combineReducers } from "redux";

// contactList setContactList

const initialState = {
  contactlist: [],
};

//array.push(valore da pushare)
//array.push(contacts)

function contactReducer(state = {}, action) {
  switch (action.type) {
    // case "SET_NAME":
    //   return { ...state, name: action.payload };
    // case "SET_SURNAME":
    //   return { ...state, surname: action.payload };
    // case "SET_NUMBER":
    //   return { ...state, number: action.payload };
    case "SET_CONTACT_LIST":
      return { ...state, contactlist: [...state.contactlist, action.payload] };
    case "DELETE":
      return {
        ...state,
        contactlist: [...state.contactlist].filter(
          (_, index) => index !== action.payload
        ),
      };
    default:
      return state;
  }
}

const store = createStore(contactReducer, initialState);

export default store;
