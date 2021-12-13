export default function reducer(state = {
    status:false
}, action) {
   switch (action.type) {
       // 获取到数组，将数据更新state仓库
       case "changeModelStatus":
           return {
               ...state,
               status:action.payload
           }
       default:
           return state
   }
}
