import axios from "axios"
import { ERROR, GET_TASKS, LOADING } from "../actionType"
import { URL } from "../authentication/action"

export const fetchTask=(token)=>(dispatch)=>{
    try {
       
        dispatch({type:LOADING})
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        axios.get(`${URL}/tasks`).then((data)=>{
            console.log(data.data)
            dispatch({type:GET_TASKS,payload:data.data})
        })
        
    } catch (error) {
        dispatch({type:ERROR})
     console.error(error)   
    }
};

export const addTask=(obj)=>(dispatch)=>{
    try {
       
        dispatch({type:LOADING})
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`
      
        axios.post(`${URL}/tasks/add`,obj).then((data)=>{
            console.log(data.data)
            
        })
        
    } catch (error) {
        dispatch({type:ERROR})
     console.error(error)   
    }
};

export const deleteTask =(id)=>(dispatch)=>{

    try {
        dispatch({type:LOADING})
        axios.delete(`${URL}/tasks/delete/${id}`)
        // return alert(`Task has been deleted`)
        
    } catch (error) {
        dispatch({type:ERROR})
     console.error(error)
    }
}