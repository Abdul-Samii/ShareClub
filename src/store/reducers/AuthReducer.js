import { types } from "../actionTypes";

const initialState = {
    isLoading:false,
    msg:'',
};

export const authReducer = (state=initialState,{type,payload})=>{
    switch(type){
        case types.REGISTER_NEEDY_START:
            return {...state, isLoading:true}
        case types.REGISTER_NEEDY_SUCCESS:
            return {...state, isLoading:false, msg:payload}
        case types.REGISTER_NEEDY_FAILED:
            return {...state, isLoading:false,msg:payload}

        case types.REGISTER_DONOR_START:
            return {...state, isLoading:true}
        case types.REGISTER_DONOR_SUCCESS:
            return {...state, isLoading:false, msg:payload}
        case types.REGISTER_DONOR_FAILED:
            return {...state, isLoading:false}

        case types.LOGIN_START:
            return {...state, isLoading:true}
        case types.LOGIN_SUCCESS:
            return {...state, isLoading:false}
        case types.LOGIN_FAILED:
            return {...state, isLoading:false}
        
        
        default:
            return state; 
    }
}