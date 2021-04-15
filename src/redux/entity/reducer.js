import { ACTION_NAME } from './actionTypes'

const initialState = {
    arr: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_NAME: return {
            arr: state.arr
        }
        default: return state
    }
}

export default reducer