import React, {useContext} from 'react'
import {AppContext} from '../App'

function TodoItem(props) {
  const context = useContext(AppContext)
  const {id, name, isDone} = props
  return (
    <li
      onClick={() => {
        context.actions.toggleTodo(id)
      }}
      className={isDone ? 'todoitem done' : 'todoitem'}
    >
      {name}
    </li>
  )
}

export default TodoItem
