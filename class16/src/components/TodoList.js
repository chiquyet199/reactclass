import React from 'react'
import TodoItem from './TodoItem'
import {AppContext} from '../App'

function TodoList() {
  return (
    <AppContext.Consumer>
      {context => (
        <ul className="todoitems">
          {context.state.todos.map(todo => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              name={todo.name}
              isDone={todo.done}
              // onClick={context.actions.toggleTodo}
            />
          ))}
        </ul>
      )}
    </AppContext.Consumer>
  )
}

export default TodoList
/**
 * 
 * 
 context={
  state: this.state,
  state: {
    filter: 'all',
    todos: []
  }
  actions: {...}
}
 * 
 <AppContext.Provider value={context}/>
 */
