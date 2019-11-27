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

function TodoList(props) {
  const { todos } = props;
  return (
    <ul className="todoitems">
      {/* <li className="todoitem">nau an</li>
      <li className="todoitem done">rua chen</li>
      <li className="todoitem">giat do</li> */}
      {todos.map(todo => (
        <li key={todo.id} className={todo.done ? "todoitem done" : "todoitem"}>
          {todo.name}
        </li>
      ))}
    </ul>
  );
}

function FilterButtons(props) {
  const { filter } = props;
  return (
    <div>
      <button className={`show-all filter-button ${filter === "all" ? "active" : ""}`}>All</button>
      <button className={`show-done filter-button  ${filter === "done" ? "active" : ""}`}>Done</button>
      <button className={`show-not-done filter-button  ${filter === "notdone" ? "active" : ""}`}>Not Done</button>
    </div>
  );
}

class App extends React.Component {
  state = {
    filter: "done",
    todos: [
      {
        id: generateUniqueId(),
        name: "nau an",
        done: true
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
        <TodoList todos={this.state.todos} />
        <FilterButtons filter={this.state.filter} />
      </div>
    );
  }
}

export default App;
