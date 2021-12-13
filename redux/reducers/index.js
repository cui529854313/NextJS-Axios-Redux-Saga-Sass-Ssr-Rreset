import {combineReducers} from "redux"
import countReducer from "./countReducer"
import userReducer from "./userReducer"
import modelReducer from "./modelReducer"

// 将多个reducer合并位一个reducer
export default combineReducers({
    counts:countReducer,
    user:userReducer,
    model:modelReducer
})