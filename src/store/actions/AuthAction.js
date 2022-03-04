import {types} from '../actionTypes';
import {httpRequest} from '../../config';
import qs from 'qs';
import { setToast } from '.';
import AsyncStorage from '@react-native-community/async-storage';
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


//Register Needy
export const RegisterNeedy = (data) => async dispatch=>{
    try{
        dispatch({type:types.REGISTER_NEEDY_START});
        let queryData = qs.stringify(data);
        const response = await httpRequest.post('/auth/needy',queryData);
        const result = response.data;
        console.log("99999999999 ",response);
        dispatch({type:types.REGISTER_NEEDY_SUCCESS,payload:result});
        notifyMessage(result)

    }
    catch(err)
    {
        console.log("Error in input : -------------------------------------------------------------",err);
        dispatch({type:types.REGISTER_NEEDY_FAILED,payload:result});
    }
}



//Register Donor
export const RegisterDonor = (data) => async dispatch=>{
    try{
        dispatch({type:types.REGISTER_DONOR_START});
        let queryData = qs.stringify(data);
        const response = await httpRequest.post('/auth/donor',queryData);
        const result = response.data;
        dispatch({type:types.REGISTER_DONOR_SUCCESS,payload:result});
        notifyMessage(result)

    }
    catch(err)
    {
        console.log("Error in input : -------------------------------------------------------------",err);
        dispatch({type:types.REGISTER_NEEDY_FAILED,payload:result});
    }
}



//Login
export const LoginUser = (data) => async dispatch=>{
    try{
        dispatch({type:types.LOGIN_START});
        let queryData = qs.stringify(data);
        const response = await httpRequest.post('/auth/login',queryData);
        const result = response.data;
        dispatch({type:types.LOGIN_SUCCESS,payload:result.msg});
        notifyMessage(result.msg)
        // console.log(result.token)
        await AsyncStorage.setItem('item',result.token);
        await AsyncStorage.setItem('userId',result.userId)
        dispatch(setToast('info','A verification link has sent to your account, Please verify to continue'))

        

    }
    catch(err)
    {
        console.log("Error in input : -------------------------------------------------------------",err);
        dispatch({type:types.LOGIN_FAILED});
    }
}