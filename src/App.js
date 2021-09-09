import './App.css';
import React, {useState} from 'react';
import Todo from './components/Todo';

function App() {
  const [todos, setTodo] = useState([]);
  const [currTodo, setCurrTodo] = useState('');
  
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

  const addTodo = (addTodo) => {
    let todoList = [...todos];
    todoList.push(addTodo);
    setCurrTodo('');
    setTodo([...todos, currTodo]);
    console.log(todos);
  };

  const createTodoEl = (todoEl) => {
    setCurrTodo(todoEl.target.value)
    console.log('currTodo state: ' + currTodo);
  };

  return (
    <div className="container">
      <input
        placeholder='enter todo'
        onChange={(e) => createTodoEl(e)}
        value={currTodo}
      />
      <button onClick={() => addTodo()}>Submit</button>
      <div>
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
