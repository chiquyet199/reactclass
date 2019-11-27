import React from 'react';

function AddForm() {
  return (
    <form className="add-todo">
      <input className="todoitem-input" type="text" />
      <button className="add-todoitem-button">Add</button>
    </form>
  );
}

export default AddForm;
