import React from 'react'
import './App.css'
import TodoList from './components/TodoList'
import TodoTitle from './components/TodoTitle'
import AddForm from './components/AddForm'
import FilterButtons from './components/FilterButtons'

function generateUniqueId() {
  return Math.floor(new Date().getTime() * Math.random()) + ''
}

const defaultTodos = [
  {
    id: generateUniqueId(),
    name: 'nau an',
    done: true,
  },
  {
    id: generateUniqueId(),
    name: 'giat do',
    done: true,
  },
  {
    id: generateUniqueId(),
    name: 'trong con ',
    done: false,
  },
]

class App extends React.Component {
  state = {
    filter: 'all',
    todos: JSON.parse(localStorage.getItem('todos')) || defaultTodos,
  }

  addNewTodo = name => {
    const newTodo = {
      id: generateUniqueId(),
      name: name,
      done: false,
    }
    const newTodos = [...this.state.todos, newTodo]
    localStorage.setItem('todos', JSON.stringify(newTodos))
    this.setState({todos: newTodos})
  }

  toggleTodo = id => {
    this.state.todos.forEach(todo => {
      if (todo.id === id) {
        todo.done = !todo.done
      }
    })
    localStorage.setItem('todos', JSON.stringify(this.state.todos))
    this.setState({todos: this.state.todos})
  }

  changeFilter = filter => {
    this.setState({filter: filter})
  }

  render() {
    const displayTodos = this.state.todos.filter(todo => {
      if (this.state.filter === 'all') return true
      if (this.state.filter === 'done') return todo.done
      if (this.state.filter === 'notdone') return !todo.done
    })
    return (
      <div>
        <TodoTitle />
        <AddForm onSubmit={this.addNewTodo} />
        <TodoList
          todos={displayTodos}
          onTodoClick={this.toggleTodo}
        />
        <FilterButtons
          filter={this.state.filter}
          onButtonClick={this.changeFilter}
        />
      </div>
    )
  }
}

export default App
