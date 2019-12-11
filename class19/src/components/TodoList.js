import React from 'react'
import {connect} from 'react-redux';
import TodoItem from './TodoItem'

function TodoList(props) {
  const displayTodos = props.todos.filter(todo => {
    if (props.filter === 'all') return true
    if (props.filter === 'done') return todo.done
    if (props.filter === 'notdone') return !todo.done
  })
  return (
    <ul className="todoitems">
      {displayTodos.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          name={todo.name}
          isDone={todo.done}
        />
      ))}
    </ul>
  )
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    filter: state.filter
  }
}

export default connect(mapStateToProps)(TodoList);
