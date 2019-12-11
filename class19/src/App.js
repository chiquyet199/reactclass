import React from "react";
import {setTodos} from './redux/actions'
import {connect} from 'react-redux'
import "./App.css";
import TodoList from "./components/TodoList";
import TodoTitle from "./components/TodoTitle";
import AddForm from "./components/AddForm";
import FilterButtons from "./components/FilterButtons";

export const AppContext = React.createContext();

class App extends React.Component {
  async componentDidMount(){
    const response = await window.fetch('http://localhost:3000/todos');
    const data = await response.json();
    this.props.setTodos(data)
  }

  render() {
    return (
      <>
        <TodoTitle />
        <AddForm />
        <TodoList />
        <FilterButtons />
      </>
    );
  }
}

const mapActionsToProps = dispatch => {
  return {
    setTodos: data => {
      dispatch(setTodos(data))
    }
  }
}

export default connect(null, mapActionsToProps)(App);
