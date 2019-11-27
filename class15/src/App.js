import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoTitle from "./components/TodoTitle";
import AddForm from "./components/AddForm";
import FilterButtons from "./components/FilterButtons";

function generateUniqueId() {
  return Math.floor(new Date().getTime() * Math.random()) + "";
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

  addNewTodo = name => {
    const newTodo = {
      id: generateUniqueId(),
      name: name,
      done: false
    };
    const newTodos = [...this.state.todos, newTodo];
    this.setState({ todos: newTodos });
  };

  render() {
    return (
      <div>
        <TodoTitle />
        <AddForm onSubmit={this.addNewTodo} />
        <TodoList todos={this.state.todos} />
        <FilterButtons filter={this.state.filter} />
      </div>
    );
  }
}

export default App;
