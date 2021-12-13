export default function reducer(state = {
    status:false
}, action) {
   switch (action.type) {
       case "changeModelStatus":
           return {
               ...state,
               status:action.payload
           }
       default:
           return state
   }
}
