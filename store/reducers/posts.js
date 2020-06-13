var initialState = {
  happy: [{
    text: "I am glad I received such a positive message today. That was the most amazing thing :).",
    timestamp: 1591816437
  },
  {
    text: "I am happy.",
    timestamp: 1591416237
  }
  ],
  unsure: [{
    text: "I am glad I received such a positive message today. That was the most amazing thing :).",
    timestamp: 1591816437
  },
  {
    text: "I did a lot of stuff today. First I started cooking a bolognese.",
    timestamp: 1591416237
  }
  ],
  sad: [{
    text: "I am glad I received such a positive message today. That was the most amazing thing :).",
    timestamp: 1591816437
  },
  {
    text: "I am sad.",
    timestamp: 1591416237
  }
  ]
}


const Posts = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      var now = new Date().getTime()/1000;
      return [
        ...state,
        {
          id: state.length + 1,
          text: action.payload.text,
          timestamp: now,
        },
      ];
    default:
      return state;
  }
};

export default Posts;
