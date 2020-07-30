import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
const rootReducer = combineReducers({
   todoData: todoReducer
});

export default rootReducer;

