
  import {
    INSERT_NAMES,
  } from "../action-types/action-types";
  
  const initialState = {
    people: [
        {
          name: "Joe",
        },
        {
          name: "Mikael",
        },
      ],
    };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case INSERT_NAMES:
        return {
          ...state,
          people: [{name: "Joe"}, {name: "Mikael"}],
        };
      default:
        return state;
    }
  };