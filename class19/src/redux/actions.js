/**
 * Action là 1 function return về 1 object
 * chứa thông tin cần thiết để thực hiện action đó
 * trong đó bắt buộc phải có key là "type"
 */
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const CHANGE_FILTER = 'CHANGE_FILTER'

export const addNewTodo = (name) => {
    return {
        name: name,
        type: ADD_TODO
    }
}

export const toggleTodo = id => {
    return {
        id: id,
        type: TOGGLE_TODO
    }
}

export const changeFilter = filterValue => {
    return {
        filter: filterValue,
        type: CHANGE_FILTER
    }
}

// store.dispatch(changeFilter('done'))

// store = {
//     dispatch: function (action) {
//         reducers(state, action())
//     }
// }