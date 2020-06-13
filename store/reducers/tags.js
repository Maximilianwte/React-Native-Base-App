const activeTags = [
  "#happy",
  "#sad"
];
const tags = (state = activeTags, action) => {
  switch (action.type) {
    case "HANDLE_TAGS":
    console.log(state)
      if (state.includes(action.payload)) {
        return state.filter((item) => item != action.payload);
      } else {
        return [...state, action.payload];
      }

    default:
      return state;
  }
};

export default tags;
