import { createStore, combineReducers } from "redux";

import posts from "./reducers/posts";

// the name here in the combineReducers is how we call the data in our front-end component
const store = createStore(
  combineReducers({
    postData: posts,
  })
);

export default store;
