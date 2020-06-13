const mood = (state = "", action) => {
    switch (action.type) {
      case "CHANGE_MOOD":
        return action.payload
      default:
        return state;
    }
  };
  
  export default mood;
  