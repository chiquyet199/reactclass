import React from 'react';

function AddForm(props) {
  const {onSubmit} = props

  const handleSubmitForm = e => {
    e.preventDefault()
    const input = document.querySelector('.todoitem-input');
    onSubmit(input.value)
    input.value = ''
    input.focus();
  }

  return (
    <form onSubmit={handleSubmitForm} className="add-todo">
      <input className="todoitem-input" type="text" />
      <button className="add-todoitem-button">Add</button>
    </form>
  );
}

export default AddForm;
