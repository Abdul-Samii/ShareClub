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









