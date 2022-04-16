import {types} from '../actionTypes';
import {httpRequest} from '../../config';
import qs from 'qs';
import {
    ToastAndroid,
    Platform,
    AlertIOS,
  } from 'react-native';
import { NotifyMessage } from '../../components/toast';

function notifyMessage(msg) {
if (Platform.OS === 'android') {
  ToastAndroid.show(msg, ToastAndroid.SHORT)
} else {
  AlertIOS.alert(msg);
}
}


//Get Donor
export const GetDonor = (data) => async dispatch=>{
    try{
        dispatch({type:types.GET_DONOR_START});
        let queryData = qs.stringify(data);
        const response = await httpRequest.post('/donor/getdonor',queryData);
        const result = response.data;
        console.log("*********jjj*** ",result)
        dispatch({type:types.GET_DONOR_SUCCESS,payload:result});

    }
    catch(err)
    {
        console.log("Error in input : -------------------------------------------------------------",err);
        dispatch({type:types.GET_DONOR_FAILED});
    }
}

//Add Donation
export const AddNewDonation = (data) => async dispatch=>{
  var response
  try{
      dispatch({type:types.ADD_DONATION_START});
      let queryData = qs.stringify(data);
       response = await httpRequest.post('/donor/donationad',queryData);
      const result = response.data;
      console.log("*********jjj*** ",result)
      NotifyMessage(response.data.msg)
      dispatch({type:types.ADD_DONATION_SUCCESS,payload:result});

  }
  catch(err)
  {
      NotifyMessage(response.data.msg)
      console.log("Error in input : -------------------------------------------------------------",err);
      dispatch({type:types.ADD_DONATION_FAILED});
  }
}

//Get All Categories
export const GetAllCategories = (data) => async dispatch=>{
  
  try{
      dispatch({type:types.GET_CATEGORY_START});
      let queryData = qs.stringify(data)
      console.log("Testing pass ",data)

      const response = await httpRequest.get('admin/category');
      const result = response.data;
      console.log("Results ---------- ",result);
      dispatch({type:types.GET_CATEGORY_SUCCESS,payload:result});
  }
  catch(err)
  {
    console.log("Something went wrong ----------------- ",err);
    dispatch({type:types.GET_CATEGORY_FAILED});
  }
}