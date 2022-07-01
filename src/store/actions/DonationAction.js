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


//Get Donations
export const GetDonationsMsg = (data) => async dispatch=>{

    try{
        dispatch({type:types.GET_DONATIONS_MSG_START});
        let queryData = qs.stringify(data);
        const response = await httpRequest.post('/donations/donationsformsg',queryData);
        const result = response.data;
        console.log("*********YOYOYOYOYOYO*** ",result)
        dispatch({type:types.GET_DONATIONS_MSG_SUCCESS,payload:result});

    }
    catch(err)
    {
        console.log("Error in input : -------------------------------------------------------------",err);
        dispatch({type:types.GET_DONATIONS_MSG_FAILED});
    }
}

