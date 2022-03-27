import {types} from '../actionTypes';
import {httpRequest} from '../../config';
import qs from 'qs';
import {
    ToastAndroid,
    Platform,
    AlertIOS,
  } from 'react-native';

function notifyMessage(msg) {
if (Platform.OS === 'android') {
  ToastAndroid.show(msg, ToastAndroid.SHORT)
} else {
  AlertIOS.alert(msg);
}
}


//Get Needy
export const GetNeedy = (data) => async dispatch=>{
    try{
        dispatch({type:types.GET_NEEDY_START});
        let queryData = qs.stringify(data);
        const response = await httpRequest.post('/needy/getneedy',queryData);
        const result = response.data;
        console.log("************ ",result)
        dispatch({type:types.GET_NEEDY_SUCCESS,payload:result});

    }
    catch(err)
    {
        console.log("Error in input : -------------------------------------------------------------",err);
        dispatch({type:types.GET_NEEDY_FAILED});
    }
}


//View Nearby ads
export const ViewNearbyAds = (data) => async dispatch=>{
  
  try{
      dispatch({type:types.VIEW_NEARBY_ADS_START});
      let queryData = qs.stringify(data)
      console.log("Testing pass ",data)

      const response = await httpRequest.get('needy/nearbydonations',{
        params:{
          userId:data
        }
      });
      const result = response.data;
      console.log("Results ---------- ",result);
      dispatch({type:types.VIEW_NEARBY_ADS_SUCCESS,payload:result});
  }
  catch(err)
  {
    console.log("Something went wrong ----------------- ",err);
    dispatch({type:types.VIEW_NEARBY_ADS_FAILED});
  }
}


//View Booked Ads
export const ViewBookedAds = (data) => async dispatch=>{
  var response;
  try{
      dispatch({type:types.VIEW_BOOKEDADS_START});
      let queryData = qs.stringify(data)
      console.log("Testing pass ",data)

       response = await httpRequest.get('needy/bookeddonations',{
        params:{
          userId:data
        }
      });
      const result = response.data;
      console.log("FUCK ---------- ",result.donations.currentAds[0].category.name);
      dispatch({type:types.VIEW_BOOKEDADS_SUCCESS,payload:result});
  }
  catch(err)
  {
    console.log("Something went wrong ----------------- ",err);
    dispatch({type:types.VIEW_BOOKEDADS_FAILED,payload:response.data});
  }
}