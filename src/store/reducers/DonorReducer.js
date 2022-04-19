import { types } from "../actionTypes";

const initialState = {
    isLoading:false,
    isLoad:false,
    donorProfile:'',
    donationAds:[],
    categories:[],
    msg:''
};

export const DonorReducer = (state=initialState,{type,payload})=>{
    switch(type){
        case types.GET_DONOR_START:
            return {...state, isLoading:true}
        case types.GET_DONOR_SUCCESS:
            return {...state, donorProfile:payload}
        case types.GET_DONOR_FAILED:
            return {...state, isLoading:false}

        case types.VIEW_BOOKED_DONOR_ADS_START:
            return {...state, isLoad:true}
        case types.VIEW_BOOKED_DONOR_ADS_SUCCESS:
            return {...state,isLoad:false, donationAds:payload.donations,msg:payload.msg}
        case types.VIEW_BOOKED_DONOR_ADS_FAILED:
            return {...state, isLoad:false}

        case types.ADD_DONATION_START:
            return {...state, isLoading:true}
        case types.ADD_DONATION_SUCCESS:
            return {...state,isLoading:false,msg:payload.msg}
        case types.ADD_DONATION_FAILED:
            return {...state, isLoading:false}

            
        case types.GET_CATEGORY_START:
            return {...state, isLoading:true}
        case types.GET_CATEGORY_SUCCESS:
            return {...state,isLoading:false,categories:payload.categories,msg:payload.msg}
        case types.GET_CATEGORY_FAILED:
            return {...state, isLoading:false}
        
        


        default:
            return state; 
    }
}