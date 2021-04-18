import { ACTION_NAME } from "./actionTypes"

const doEntity = () => {
    return {
        type: ACTION_NAME,
        info: 'optional message'
    }
}


// const url = 'https://bhar4t.com/some_api'

// function fetchEntity() {
//     return function(dispatch) {
//         // dispatch action if any
//         fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             // dispatch action if any
//         })
//         .catch((e) => {
//             // dispatch action if any
//         })
//     }
// }


export {
    doEntity
}

// export default fetchEntity