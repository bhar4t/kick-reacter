import { combineReducers } from 'redux'
import reducer from './entity/reducer'

const rootReducer = combineReducers({
    entity: reducer
})

export default rootReducer