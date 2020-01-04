import React from 'react';

const Filter = ({ handleInputChange, filter, todos }) => {
  return (
    <div className="filter">
      <input
        type="text"
        name="filter"
        placeholder="Filter tasks"
        onChange={handleInputChange}
        value={filter}
      />
      <br />
      <span> {todos.filter(todo => !todo.done).length} remaining </span>
    </div>
  );
};

export default Filter;
