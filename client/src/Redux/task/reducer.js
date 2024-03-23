
const initialData = {
    isloading:false,
    isError:false,
    tasks:[],
}

export const reducer = (state=initialData, {type, payload})=>{
    switch(type){
        case "LOADING":{
            return{...state, isloading:true}
        }
        case "GET_TASKS":{
            return{...state,isloading:false,tasks:payload}
        }
        case "ERROR":{
            return{...state,isloading:false,isError:true}
        }

        default: return state
    }
}