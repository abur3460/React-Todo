import React from 'react';
import "./Todo.css";
import { InlineFunctions } from 'terser';

const Todo = props => {
    return (
        <div className="list-style"
            style={props.todo.completed ? {
                color: 'white',
            } : null}
            onClick={() => props.handleToggleComplete(props.todo.id)}
        >
            {props.todo.task}
            <i class="fas fa-check" style={props.todo.completed ? {
                display: 'inline',
                paddingLeft: '5px',
                color: 'black',
            } : null}></i>
        </div>

    );
};

export default Todo;