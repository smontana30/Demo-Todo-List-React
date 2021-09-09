import React, {} from 'react';

function Todo({ index, todo, deleteTodo }) {
    return (
        <div>
            {todo}
            <button onClick={() => deleteTodo(index, todo)}>delete</button>
        </div>
    );
}

export default Todo;