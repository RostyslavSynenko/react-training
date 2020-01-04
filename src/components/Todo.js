import React from 'react';

const Todo = ({ todo, onCheck, onRemoveItem }) => (
  <li>
    <label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onCheck(todo.id)}
      />
      <span className={'title ' + (todo.done ? 'done-true' : '')}>
        {todo.text}
      </span>
    </label>
    <button className={'btn-delete'} onClick={() => onRemoveItem(todo.id)}>
      Delete
    </button>
  </li>
);

export default Todo;
