/**
 * Reducers là 1 function, 
 * nhận vào 2 params, đó là appState và action
 * mỗi khi 1 actions được gọi, thì reducer sẽ chạy 
 * và trả về appState mới
 */

import {ADD_TODO, TOGGLE_TODO, CHANGE_FILTER} from './actions'

function generateUniqueId() {
  return Math.floor(new Date().getTime() * Math.random()) + "";
}

const initialState = {
  filter: "all",
  todos: [
    {
      id: generateUniqueId(),
      name: "nau an",
      done: true
    },
    {
      id: generateUniqueId(),
      name: "giat do",
      done: true
    },
    {
      id: generateUniqueId(),
      name: "trong con ",
      done: false
    }
  ]
};

const addNewTodo = (state, action) => {
    const newState = {...state}
    const newTodo = {
        id: generateUniqueId(),
        name: action.name,
        done: false,
    }
    newState.todos.push(newTodo);
    return newState
}

const toggleTodo = (state, action) => {
    const newState = {...state}
    newState.todos.forEach(todo => {
        if (todo.id === action.id) {
            todo.done = !todo.done
        }
    })
    return newState
}

const changeFilter = (state, action) => {
    const newState = {...state}
    newState.filter = action.filter
    return newState
}

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return addNewTodo(state,action);
    case TOGGLE_TODO:
      return toggleTodo(state,action);
    case CHANGE_FILTER:
      return changeFilter(state, action);
    default:
      return state;
  }
};

export default reducers;
