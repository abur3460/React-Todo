import React from 'react';

const Todo = props => {
    return (
        <div
            style={props.todo.completed ? { textDecoration: 'line-through' , color: '#4bafb8'} : null}
            onClick={() => props.handleToggleComplete(props.todo.id)}
        >
            {props.todo.task}
        </div>
    );
};

export default Todo;