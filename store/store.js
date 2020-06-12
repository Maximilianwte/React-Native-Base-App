import { createStore, combineReducers } from "redux";

import posts from "./reducers/posts";
import modules from "./reducers/modules";

// the name here in the combineReducers is how we call the data in our front-end component
const store = createStore(
  combineReducers({
    postData: posts,
    moduleState: modules
  })
);

export default store;
