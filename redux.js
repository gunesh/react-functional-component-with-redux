import { createStore, applyMiddleware, compose } from "redux";
import logger from 'redux-logger'
import thunk from "redux-thunk";
import actionInterceptor from './ActionInterceptor'

const initialState = {
  todos: [
    {
      id: 1,
      name: "Read a bit",
      complete: true
    },
    {
      id: 2,
      name: "Do laundry",
      complete: false
    }
  ]
};

const middlewares = [logger,actionInterceptor];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(...middlewares))
);
// Reducer
function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, complete: !todo.complete }
            : todo
        )
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    default:
      return state;
  }
}
// Actions
export const addTodoAction = todo => ({
  type: "ADD_TODO",
  payload: todo
});
export const addTodoAction2 = todo => ({
  type: "ADD_TODO",
  payload: todo
});
export const toggleTodoComplete = todoId => ({
  type: "TOGGLE_TODO",
  payload: todoId
});

export const deleteTodoAction = todoId => ({
  type: "DELETE_TODO",
  payload: todoId
});
