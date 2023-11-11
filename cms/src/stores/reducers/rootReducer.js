import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import jobReducer from "./jobReducer";
import companyReducer from "./companyReducer";
import userReducer from "./userReducer";
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    jobReducer,
    companyReducer,
    userReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store