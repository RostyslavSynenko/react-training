import React from 'react';

const AddTodo = ({ handleInputChange, text, addTodo }) => (
  <form>
    <input type="text" name="text" onChange={handleInputChange} value={text} />
    <button type="submit" onClick={addTodo}>
      Add
    </button>
  </form>
);

export default AddTodo;
