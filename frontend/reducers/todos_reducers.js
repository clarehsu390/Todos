import {RECEIVE_TODOS, RECEIVE_TODO} from '../actions/todos_actions';
import merge from 'lodash/merge';

const initialState = {
    1: {
      id: 1,
      title: 'wash car',
      body: 'with soap',
      done: false
    },
    2: {
      id: 2,
      title: 'wash dog',
      body: 'with shampoo',
      done: true
    },
  };
  
const todosReducer = (state = initialState, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_TODOS:
            return action.todos;
        case RECEIVE_TODO:
            const newTodo = {[action.todo.id]: action.todo};
            return Object.assign({}, state, newTodo);

        default:
        return state;
    }
};

export default todosReducer;

