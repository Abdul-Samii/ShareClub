import { types } from "../actionTypes";

const initialState = {
    isLoading:false,
    donationsMsg:[],
};

export const DonationReducer = (state=initialState,{type,payload})=>{
    switch(type){
        case types.GET_DONATIONS_MSG_START:
            return {...state, isLoading:true}
        case types.GET_DONATIONS_MSG_SUCCESS:
            return {...state, isLoading:false, donationsMsg:payload}
        case types.GET_DONATIONS_MSG_FAILED:
            return {...state, isLoading:false,msg:payload.msg}

       
        
        
        default:
            return state; 
    }
}