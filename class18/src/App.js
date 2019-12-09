import React from "react";
import {changeFilter} from './redux/actions'
import {connect} from 'react-redux'
import "./App.css";
import TodoList from "./components/TodoList";
import TodoTitle from "./components/TodoTitle";
import AddForm from "./components/AddForm";
import FilterButtons from "./components/FilterButtons";

export const AppContext = React.createContext();

class App extends React.Component {
  render() {
    return (
      <>
        <TodoTitle />
        <h2>filterValue = {this.props.filterValue}</h2>
        {this.props.todoList.map(i => <div>{i.name}</div>)}
        <button onClick={this.props.changeFilterToDone}>Change filter value</button>
        {/* <AddForm />
        <TodoList />
        <FilterButtons /> */}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    todoList: state.todos,
    filterValue: state.filter
  }
}

const mapActionsToProps = dispatch => {
  return {
    changeFilterToDone: () => {
      dispatch(changeFilter('done'))
    }
  }
}

export default connect(mapStateToProps, mapActionsToProps)(App);
// export default connect(null, mapActionsToProps)(App);
// export default connect(mapStateToProps)(App);
