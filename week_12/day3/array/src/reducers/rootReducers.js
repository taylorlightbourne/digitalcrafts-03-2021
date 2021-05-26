const initialState = {
    name: ,
  };
  
  function rootReducer(state = initialState, action) {
    switch (action.type) {
      case "CHANGE_NAMES":
        return { ...state, name: [{name: "Joe"}, {name: "Mikael"}];
      default:
        return state;
    }
  }
  
  export default rootReducer;