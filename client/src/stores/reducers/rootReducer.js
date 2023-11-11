import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import jobReducer from "./jobReducer";
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    jobReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store