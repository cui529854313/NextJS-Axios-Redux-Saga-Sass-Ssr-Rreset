import {call,put,takeEvery} from "redux-saga/effects"
import {changeUserAC} from "../actions/index.js"
import api from "../../http/api";

function *checkItem({payload}){
    console.log("进入了saga中间件进行了拦截");
    const res = yield call(api.dataManage.GetCollectionData,payload)
    console.log("saga结果拦截后,发送了异步请求,返回的结果",res);
    console.log("saga结果作为payload传给changeUserAC",res.result.name);
    yield put(changeUserAC(res.result.name))
    //put理解为dispatch(),继续派发changeUserAC这个action,修改redux中的数据;
}
export default function *index(){
    yield takeEvery("changeUserData",checkItem)
}
//根据你传递过来type,决定执行哪个generator生成;


