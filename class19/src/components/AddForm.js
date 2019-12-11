import React from "react";
import { connect } from "react-redux";
import { addNewTodo } from "../redux/actions";
import { addNewTodo as addTodo } from "../api";

function AddForm(props) {
  const { addNewTodo } = props;

  const handleSubmitForm = async e => {
    e.preventDefault();
    const input = document.querySelector(".todoitem-input");
    try{
      await addTodo(input.value);
      addNewTodo(input.value);
      input.value = "";
      input.focus();
    }catch(e){
      console.error(e)
    }
  };

  return (
    <form onSubmit={handleSubmitForm} className="add-todo">
      <input className="todoitem-input" type="text" />
      <button className="add-todoitem-button">Add</button>
    </form>
  );
}

const mapActionsToProps = dispatch => {
  return {
    addNewTodo: name => {
      dispatch(addNewTodo(name));
    }
  };
};

export default connect(null, mapActionsToProps)(AddForm);
