/**
 * 
 * @param {} state  仓库数据
 * @param {*} action  通知对象
 * @returns 
 */
export default function reducer(state = 10, action) {
    // switch里面一定要有default默认值，返回默认state，程序初始化就会执行reducer
    switch (action.type) {
        // 计数器
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
