import React from "react";
import "./App.css";

function generateUniqueId() {
  return Math.floor(new Date().getTime() * Math.random()) + "";
}

function TodoTitle() {
  return <h1>Todo List</h1>;
}

function AddForm() {
  return (
    <form className="add-todo">
      <input className="todoitem-input" type="text" />
      <button className="add-todoitem-button">Add</button>
    </form>
  );
}

function TodoList(params) {
  return (
    <ul className="todoitems">
      <li className="todoitem">nau an</li>
      <li className="todoitem done">rua chen</li>
      <li className="todoitem">giat do</li>
    </ul>
  );
}

function FilterButtons() {
  return (
    <div>
      <button className="show-all filter-button active">All</button>
      <button className="show-done filter-button  ">Done</button>
      <button className="show-not-done filter-button  ">Not Done</button>
    </div>
  );
}

class App extends React.Component {
  state = {
    filter: "all",
    todos: [
      {
        id: generateUniqueId(),
        name: "nau an",
        done: false
      },
      {
        id: generateUniqueId(),
        name: "giat do",
        done: true
      },
      {
        id: generateUniqueId(),
        name: "trong con ",
        done: false
      }
    ]
  };
  render() {
    return (
      <div>
        <TodoTitle />
        <AddForm />
        <TodoList />
        <FilterButtons />
      </div>
    );
  }
}

export default App;
