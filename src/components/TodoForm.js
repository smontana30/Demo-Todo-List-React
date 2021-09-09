import React, {useState} from 'react';
import Todo from './Todo';

function TodoForm({addTodo}){
    const [value, setValue] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value)
            return;
        addTodo(value);
        setValue('');
    };

    return (
        <div>
            <input
                placeholder='enter todo'
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
            <button onClick={(e) => handleSubmit(e)}>Submit</button>
        </div>
    );
};

export default TodoForm;