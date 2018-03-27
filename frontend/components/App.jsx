import React from 'react';
import TodoList from './todos/todo_list';

export default class App extends React.Component {
    render() {
        return(
            <div>
                <h1>Todos App</h1>
                <TodoList/>
            </div>
        );
    }
}

