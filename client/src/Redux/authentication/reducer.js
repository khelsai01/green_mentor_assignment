const initalAuth={
    token:"",
    isAuth:false

}

export const reducer =(state=initalAuth, {type,payload})=>{
    switch(type){

        case "USER_LOGIN":{
            return {...state , token:payload, isAuth:true}
        }
        default: return state;
    }
}