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
            return {...state,isLoading:false, donationAds:payload.donations,msg:payload.msg}
        case types.VIEW_NEARBY_ADS_FAILED:
            return {...state, isLoading:false}

        case types.VIEW_BOOKEDADS_START:
            return {...state, isLoading:true}
        case types.VIEW_BOOKEDADS_SUCCESS:
            return {...state,isLoading:false, donationAds:payload.donations,msg:payload.msg}
        case types.VIEW_BOOKEDADS_FAILED:
            return {...state, isLoading:false}

        case types.BOOK_DONATION_START:
            return {...state, isLoading:true}
        case types.BOOK_DONATION_SUCCESS:
            return {...state,isLoading:false,msg:payload.msg}
        case types.BOOK_DONATION_FAILED:
            return {...state, isLoading:false}


        case types.CANCEL_DONATION_START:
            return {...state, isLoading:true}
        case types.CANCEL_DONATION_SUCCESS:
            return {...state,isLoading:false,msg:payload.msg}
        case types.CANCEL_DONATION_FAILED:
            return {...state, isLoading:false}

            
        
        


        default:
            return state; 
    }
}