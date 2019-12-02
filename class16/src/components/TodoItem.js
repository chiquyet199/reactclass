import React from 'react'

function TodoItem(props) {
  const {id, name, onClick, isDone} = props
  console.log(props)
  return (
    <li
      onClick={() => {
        onClick(id)
      }}
      className={isDone ? 'todoitem done' : 'todoitem'}
    >
      {name}
    </li>
  )
}

export default TodoItem
