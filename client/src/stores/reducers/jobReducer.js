import { JOB_FETCH_SUCCESS, JOB_DETAIL_FETCH_SUCCESS } from "../actions/actionTypes"

const initialState = {
    jobs: [],
    jobDetail: null
}

function jobReducer(state = initialState, action) {
    switch (action.type) {
        case JOB_FETCH_SUCCESS:
            return {...state, jobs: action.payload}
        case JOB_DETAIL_FETCH_SUCCESS:
            return {...state, jobDetail: action.payload}
        default:
            return state
    }
}

export default jobReducer