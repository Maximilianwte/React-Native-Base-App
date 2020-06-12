const initialState = [{
  text: "I am glad I received such a positive message today. That was the most amazing thing :).",
  timestamp: 1591816437
},
{
  text: "I did a lot of stuff today. First I started cooking a bolognese.",
  timestamp: 1591416237
},
{
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  timestamp: 1591416237
},
{
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  timestamp: 1591416237
},
{
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  timestamp: 1591416237
},
{
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  timestamp: 1591416237
},
{
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  timestamp: 1591416237
},
{
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  timestamp: 1591416237
},]

const Posts = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      var now = new Date().getTime()/1000;
      console.log(now)
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
