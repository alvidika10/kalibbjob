import { COMPANY_FETCH_SUCCESS, COMPANY_EDIT_FETCH_SUCCESS } from "../actions/actionTypes"


const initialState = {
    companies: [],
    companyEdit: {}
}

function companyReducer(state = initialState, action) {
    switch (action.type) {
        case COMPANY_FETCH_SUCCESS:
            return {...state, companies: action.payload}
        case COMPANY_EDIT_FETCH_SUCCESS:
            return {...state, companyEdit: action.payload}
        default:
            return state
    }
}

export default companyReducer