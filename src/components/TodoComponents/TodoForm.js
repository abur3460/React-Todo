import React from 'react';
import "./Todo.css";

const TodoForm = props => {
    return (
        <div  className="form-container">
            <form>
                <input
                    onChange={props.handleTodoChange}
                    type="text"
                    name="todo"
                    value={props.value}
                    placeholder="Add a todo item!"
                />
                <button onClick={props.handleAddTodo}>Add Item</button>
                <button onClick={props.handleClearTodos}>Clear Completed</button>
            </form>
        </div>
    );
};

export default TodoForm;