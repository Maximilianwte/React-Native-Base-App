import { createStore, combineReducers } from "redux";

import posts from "./reducers/posts";
import modules from "./reducers/modules";
import tags from "./reducers/tags";
import mood from "./reducers/mood";

// the name here in the combineReducers is how we call the data in our front-end component
const store = createStore(
  combineReducers({
    postData: posts,
    moduleState: modules,
    mood: mood,
    activeTags: tags
  })
);

export default store;
