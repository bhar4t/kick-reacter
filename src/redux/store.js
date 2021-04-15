import { createStore, combineReducers } from 'redux'
import reducer from './entity/reducer'

const rootReducter = combineReducers({
    entity: reducer
})

const store = createStore(rootReducter)

export default store

