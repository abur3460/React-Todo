// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';
import "./Todo.css";

const TodoList = props => {
    return (
        <div>
            <ul className="the-list">
                    {props.todos.map(todo => (
                        <Todo
                            handleToggleComplete={props.handleToggleComplete}
                            key={todo.id}
                            todo={todo}
                        />
                    ))}
            </ul>
        </div>
    );
};

export default TodoList;