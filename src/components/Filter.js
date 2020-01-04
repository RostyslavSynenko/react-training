import React from 'react';

const Filter = ({ handleInputChange, filter, todos }) => {
  return (
    <div>
      <input
        type="text"
        name="filter"
        placeholder="filter tasks"
        onChange={handleInputChange}
        value={filter}
      />
      <br />
      <span> {todos.filter(todo => !todo.done).length} remaining </span>
    </div>
  );
};

export default Filter;
