const Posts = (state = [], action) => {
  switch (action.type) {
    case "ADD_POST":
      var date = new Date();
      var now = date.getTime();
      console.log(state);
      return [
        ...state,
        {
          id: state.length + 1,
          user: action.payload.user,
          text: action.payload.text,
          timestamp: now,
        },
      ];
    default:
      return state;
  }
};

export default Posts;
