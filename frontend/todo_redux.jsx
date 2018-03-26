import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded',() => {
    let content = document.getElementById('content');
    let store = configureStore();
    window.store = store;
    ReactDOM.render(<h1>Todos App</h1>, content);
});