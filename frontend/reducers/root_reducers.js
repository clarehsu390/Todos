import TodosReducer from './todos_reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    todos: TodosReducer
});

export default rootReducer;