import {combineReducers} from "redux"
import countReducer from "./countReducer"
import userReducer from "./userReducer"
import modelReducer from "./modelReducer"

export default combineReducers({
    counts:countReducer,
    user:userReducer,
    model:modelReducer
})
