import { types } from "../actionTypes";

const initialState = {
    isLoading:false,
    needyProfile:'',
    donationAds:[],
    msg:''
};

export const NeedyReducer = (state=initialState,{type,payload})=>{
    switch(type){
        case types.GET_NEEDY_START:
            return {...state, isLoading:true}
        case types.GET_NEEDY_SUCCESS:
            return {...state, needyProfile:payload}
        case types.GET_NEEDY_FAILED:
            return {...state, isLoading:false}
        
        case types.VIEW_NEARBY_ADS_START:
            return {...state, isLoading:true}
        case types.VIEW_NEARBY_ADS_SUCCESS:
            return {...state, donationAds:payload.donations,msg:payload.msg}
        case types.VIEW_NEARBY_ADS_FAILED:
            return {...state, isLoading:false}
        
        


        default:
            return state; 
    }
}