import React from 'react';

const AddTodo = ({ handleInputChange, text, addTodo }) => (
  <form className="add-new">
    <input type="text" name="text" onChange={handleInputChange} value={text} />
    <button className="btn-add" type="submit" onClick={addTodo}>
      Add
    </button>
  </form>
);

export default AddTodo;
