import React, {useContext} from 'react' //hooks
import TodoItem from './TodoItem'
import {AppContext} from '../App'

function TodoList() {
  const context = useContext(AppContext)
  const displayTodos = context.state.todos.filter(todo => {
    if (context.state.filter === 'all') return true
    if (context.state.filter === 'done') return todo.done
    if (context.state.filter === 'notdone') return !todo.done
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
  // return (
  //   <AppContext.Consumer>
  //     {context => (
  //       <ul className="todoitems">
  //         {context.state.todos.map(todo => (
  //           <TodoItem
  //             key={todo.id}
  //             id={todo.id}
  //             name={todo.name}
  //             isDone={todo.done}
  //           />
  //         ))}
  //       </ul>
  //     )}
  //   </AppContext.Consumer>
  // )
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
