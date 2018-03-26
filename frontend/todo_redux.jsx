import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from './store/store';
import { receiveTodo, receiveTodos } from './actions/todos_actions';

document.addEventListener('DOMContentLoaded',() => {
    let content = document.getElementById('content');
    let store = configureStore();
    window.store = store;
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    ReactDOM.render(<h1>Todos App</h1>, content);
});