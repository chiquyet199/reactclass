import React from 'react';
import {connect} from 'react-redux';
import {toggleTodo} from '../redux/actions'

function TodoItem(props) {
  const {id, name, isDone} = props
  return (
    <li
      onClick={() => {
        props.toggleTodo(id)
      }}
      className={isDone ? 'todoitem done' : 'todoitem'}
    >
      {name}
    </li>
  )
}

const mapActionsToProps = dispatch => {
  return {
    toggleTodo: id => {
      dispatch(toggleTodo(id))
    }
  }
}

export default connect(null, mapActionsToProps)(TodoItem)
