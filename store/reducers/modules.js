const ModuleState = (state = {active: false}, action) => {
  switch (action.type) {
    case "CHANGE_MODULE_STATE":
      console.log(state);
      return {
        active : action.payload
      }
    default:
      return state;
  }
};

export default ModuleState;
