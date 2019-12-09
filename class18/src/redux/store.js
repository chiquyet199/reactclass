import {createStore} from 'redux'
import reducers from './reducers'

const store = createStore(reducers)

export default store

// store = {
//     state: {
//         ...
//     },
//     dispatch: function(action){
            reducers(this.state, action())
//     }
// }

// store.dispatch({
//     name: name,
//     type: ADD_TODO
// })