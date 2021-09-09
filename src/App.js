import './App.css';
import React, {useState} from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodo] = useState([]);
  
  // two different way to remove values from todo list one
  // would be to splice out the value using its index and the 
  // would be to filter it out using array filter method
  const deleteTodo = (index, todo) => {
    const list = [...todos];
    const l = list.filter(el => el !== todo);
    console.log(l)
    list.splice(index, 1);
    console.log(list)
    setTodo(l);
  };

  const addTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodo(newTodos);
  };

  return (
    <div className="container">

      <TodoForm addTodo={addTodo} />
      <div className='todos'>
        {todos.map((todo, index) => (
          <div>
            <Todo key={todo} index={index} todo={todo} deleteTodo={deleteTodo}/>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default App;
