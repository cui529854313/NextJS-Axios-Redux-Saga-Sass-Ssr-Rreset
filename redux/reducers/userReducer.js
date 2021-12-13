/**
 * 
 * @param {} state  仓库数据
 * @param {*} action  通知对象
 * @returns 
 */
 export default function reducer(state = {
     users:"陈西"
 }, action) {
    switch (action.type) {
        // 获取到数组，将数据更新state仓库
        case "updateUser":
            return {
                ...state,
                users:action.payload
            }
        default:
            return state
    }
}
