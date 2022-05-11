/**
 * 
 * @param {} state  仓库数据
 * @param {*} action  通知对象
 * @returns 
 */
export default function reducer(state = 10, action) {
    switch (action.type) {
        case "increment":
            return {
                ...state,
                count: state += action.payload
            }
        case "decrement":
            return {
                ...state,
                count: state -= action.payload
            }
        default:
            return state
    }
}
