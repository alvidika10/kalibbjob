import { ADD_REGISTER_SUCCESS } from "../actions/actionTypes"

const initialState = {
    register: [],
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_REGISTER_SUCCESS:
            return {...state, jobs: action.payload}
        default:
            return state
    }
}

export default userReducer