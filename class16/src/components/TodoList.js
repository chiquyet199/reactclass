import React from 'react'
import TodoItem from './TodoItem'

function TodoList(props) {
  const {todos, onTodoClick} = props

  return (
    <ul className="todoitems">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          name={todo.name}
          isDone={todo.done}
          onClick={onTodoClick}
        />
      ))}
    </ul>
  )
}

export default TodoList
