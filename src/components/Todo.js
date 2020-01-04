import React from 'react';

const Todo = ({ todo, onCheck, onRemoveItem }) => (
  <li>
    <input
      type="checkbox"
      checked={todo.done}
      onChange={() => onCheck(todo.id)}
    />
    <span className={todo.done ? 'done-true' : ''}>{todo.text}</span>
    <button onClick={() => onRemoveItem(todo.id)}>Delete</button>
  </li>
);

export default Todo;
