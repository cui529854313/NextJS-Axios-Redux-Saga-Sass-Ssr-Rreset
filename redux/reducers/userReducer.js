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
        case "updateUser":
            return {
                ...state,
                users:action.payload
            }
        default:
            return state
    }
}
