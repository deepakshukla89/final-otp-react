// store/store.js
import { createStore, applyMiddleware } from "redux";
import thunk from "../middleware/thunk/index"; // Importing custom thunk middleware
import rootReducer from "../reducer/reducer"; // Root reducer

// Creating the Redux store with the root reducer and applying the middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
