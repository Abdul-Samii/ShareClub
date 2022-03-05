import { types } from "../actionTypes";

const initialState = {
    isLoading:false,
    msg:''
};

export const UpdatesReducer = (state=initialState,{type,payload})=>{
    switch(type){
        case types.UPDATE_PASSWORD_START:
            return {...state, isLoading:true}
        case types.UPDATE_PASSWORD_SUCCESS:
            return {...state,isLoading:false, msg:payload.msg}
        case types.UPDATE_PASSWORD_FAILED:
            return {...state, isLoading:false}
        

        case types.UPDATE_NAME_START:
            return {...state, isLoading:true}
        case types.UPDATE_NAME_SUCCESS:
            return {...state,isLoading:false, msg:payload.msg}
        case types.UPDATE_NAME_FAILED:
            return {...state, isLoading:false}
        


        default:
            return state; 
    }
}