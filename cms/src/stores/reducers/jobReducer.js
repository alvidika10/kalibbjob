import { JOB_FETCH_SUCCESS, JOB_EDIT_FETCH_SUCCESS } from "../actions/actionTypes"

const initialState = {
    jobs: [],
    jobEdit: {}
}

function jobReducer(state = initialState, action) {
    switch (action.type) {
        case JOB_FETCH_SUCCESS:
            return {...state, jobs: action.payload}
        case JOB_EDIT_FETCH_SUCCESS:
            return {...state, jobEdit: action.payload}
        default:
            return state
    }
}

export default jobReducer