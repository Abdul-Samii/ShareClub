import { types } from "../actionTypes";

const initialState = {
    isLoading:false,
    donorProfile:'',
    donationAds:[],
    msg:''
};

export const DonorReducer = (state=initialState,{type,payload})=>{
    console.log("WOWWWWWW ",payload)
    switch(type){
        case types.GET_DONOR_START:
            return {...state, isLoading:true}
        case types.GET_DONOR_SUCCESS:
            return {...state, donorProfile:payload}
        case types.GET_DONOR_FAILED:
            return {...state, isLoading:false}

        case types.VIEW_BOOKEDADS_START:
            return {...state, isLoading:true}
        case types.VIEW_BOOKEDADS_SUCCESS:
            return {...state,isLoading:false, donationAds:payload.donations,msg:payload.msg}
        case types.VIEW_BOOKEDADS_FAILED:
            return {...state, isLoading:false}

        case types.ADD_DONATION_START:
            return {...state, isLoading:true}
        case types.ADD_DONATION_SUCCESS:
            return {...state,isLoading:false,msg:payload.msg}
        case types.ADD_DONATION_FAILED:
            return {...state, isLoading:false}

            
        
        


        default:
            return state; 
    }
}