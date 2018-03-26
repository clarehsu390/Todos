import RECEIVE_TODOS from '../actions/todos_actions';
import RECEIVE_TODO from '../actions/todos_actions';
const todosReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_TODOS:
            return action.todos;
        case RECEIVE_TODO:

        default:
        return state;
    }
};

export default todosReducer;

