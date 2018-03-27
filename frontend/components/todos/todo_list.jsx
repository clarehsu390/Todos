import React from 'react';
import TodoListItem from './todo_list_item.jsx';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
       return(
        <div>
            <h2>All Todos</h2>
            <ul>
                {this.props.todos.map((todo,i) => {
                     return <TodoListItem key={i} todo={todo}/>;
                })}
                </ul>
            </div>
       );
    }
}