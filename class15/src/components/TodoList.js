import React from 'react'

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

export default TodoList;
