import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from './store/store';
import Root from './components/Root.jsx';
import { receiveTodo, receiveTodos } from './actions/todos_actions';
import { allTodos } from './reducers/selectors';

document.addEventListener('DOMContentLoaded',() => {
    let content = document.getElementById('content');
    let preloadedState = {}
    let store = configureStore(preloadedState);
    window.allTodos = allTodos;
    window.store = store;
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    ReactDOM.render(<Root store={store}/>, content);
});