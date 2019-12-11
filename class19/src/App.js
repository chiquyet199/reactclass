import React from "react";
import {setTodos, showLoading, hideLoading} from './redux/actions'
import {connect} from 'react-redux'
import {loadAllTodos} from './api'
import "./App.css";
import TodoList from "./components/TodoList";
import TodoTitle from "./components/TodoTitle";
import AddForm from "./components/AddForm";
import FilterButtons from "./components/FilterButtons";

export const AppContext = React.createContext();

class App extends React.Component {
  async componentDidMount(){
    this.props.showLoading()
    let todos = await loadAllTodos()
    this.props.setTodos(todos)
    this.props.hideLoading()
  }

  render() {
    return (
      <>
        <TodoTitle />
        <AddForm />
        {this.props.loading ? <h1>Loading....</h1> : <TodoList />}
        <FilterButtons />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  }
}

const mapActionsToProps = dispatch => {
  return {
    setTodos: data => {
      dispatch(setTodos(data))
    },
    showLoading: () => {dispatch(showLoading())},
    hideLoading: () => {dispatch(hideLoading())},
  }
}

export default connect(mapStateToProps, mapActionsToProps)(App);
