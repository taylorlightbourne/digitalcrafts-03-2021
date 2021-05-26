  
const initialState = {
    user: "taylor",
  };
  
  function rootReducer(state = initialState, action) {
    switch (action.type) {
      case "CHANGE_TO_JOE":
        return { ...state, user: "Joe" };
      default:
        return state;
    }
  }
  
  export default rootReducer;