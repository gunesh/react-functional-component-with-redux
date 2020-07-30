import { createStore } from "redux";
import rootReducer from "../reducers/rootReducer";
const initialState = {
  todoData:{
    todos: []
  }
  
};

const store = createStore(
  rootReducer,
  initialState,
  window.devToolsExtension && window.devToolsExtension()
);
export default store;