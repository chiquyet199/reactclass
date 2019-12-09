import React from 'react'
import './App.css'
import TodoList from './components/TodoList'
import TodoTitle from './components/TodoTitle'
import AddForm from './components/AddForm'
import FilterButtons from './components/FilterButtons'

export const AppContext = React.createContext()

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
    todos: defaultTodos,
  }

  addNewTodo = name => {
    const newTodo = {
      id: generateUniqueId(),
      name: name,
      done: false,
    }
    const newTodos = [...this.state.todos, newTodo]
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
    const contextValue = {
      state: this.state,
      actions: {
        addNewTodo: this.addNewTodo,
        toggleTodo: this.toggleTodo,
        changeFilter: this.changeFilter,
      },
    }

    return (
      <AppContext.Provider value={contextValue}>
        <TodoTitle />
        <AddForm onSubmit={this.addNewTodo} />
        <TodoList />
        <FilterButtons
          filter={this.state.filter}
          onButtonClick={this.changeFilter}
        />
      </AppContext.Provider>
    )
  }
}

export default App
