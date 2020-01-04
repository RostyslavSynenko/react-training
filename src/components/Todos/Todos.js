import React, { useState } from 'react';
import './Todos.css';
import Todo from '../Todo';
import Filter from '../Filter';
import AddTodo from '../AddTodo';

const initialTodos = [
  { id: 1, text: 'learn react', done: true },
  { id: 2, text: 'build an react app', done: false },
  { id: 3, text: 'modify', done: true },
  { id: 4, text: 'test', done: false }
];

const Todos = () => {
  // States
  const [todos, setTodos] = useState(initialTodos);
  const [filter, setFilter] = useState('');
  const [text, setText] = useState('');

  // Handlers
  const handleInputChange = e => {
    const { name, value } = e.target;

    if (name === 'filter') {
      setFilter(value);
    } else if (name === 'text') {
      setText(value);
    }
  };

  const onCheck = id => {
    setTodos(
      todos.filter(todo =>
        todo.id === id ? Object.assign(todo, { done: !todo.done }) : todo
      )
    );
  };

  const onRemoveItem = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const onClean = () => {
    setTodos(todos.filter(todo => !todo.done));
  };

  const addTodo = e => {
    e.preventDefault();

    if (text === '') {
      return;
    }

    const todo = {
      id: Date.now(),
      text,
      done: false
    };

    setTodos(prevState => [...prevState, todo]);
    setText('');

    console.log(todo);
  };

  return (
    <div className="Todo">
      <h2>Todo</h2>
      <Filter
        handleInputChange={handleInputChange}
        filter={filter}
        todos={todos}
      />
      <ul>
        {todos.map(todo =>
          todo.text.includes(filter) ? (
            <Todo
              key={todo.id}
              todo={todo}
              onCheck={onCheck}
              onRemoveItem={onRemoveItem}
            />
          ) : null
        )}
      </ul>

      <AddTodo
        handleInputChange={handleInputChange}
        text={text}
        addTodo={addTodo}
      />

      <button className="btn-clean" onClick={onClean}>
        Clean
      </button>
    </div>
  );
};

export default Todos;
