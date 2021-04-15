import { ACTION_NAME } from "./actionTypes"

const doEntity = () => {
    return {
        type: ACTION_NAME,
        info: 'optional message'
    }
}

export {
    doEntity
}