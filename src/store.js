import {createStore} from 'redux'
import gameReducer from './reducers/index'
const store = createStore(gameReducer)
export default store