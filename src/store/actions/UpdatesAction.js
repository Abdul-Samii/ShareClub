import {types} from '../actionTypes';
import {httpRequest} from '../../config';
import qs from 'qs';
import AsyncStorage from '@react-native-community/async-storage';
import { NotifyMessage } from '../../components/toast';


//Update Password
export const UpdatePassword = (data) => async dispatch=>{
    try{
        dispatch({type:types.UPDATE_PASSWORD_START});
        let queryData = qs.stringify(data);
        const response = await httpRequest.post('/update/password',queryData);
        const result = response.data;
        console.log("99999999999 ",response);
        dispatch({type:types.UPDATE_PASSWORD_SUCCESS,payload:result});
        NotifyMessage(result.msg);

    }
    catch(err)
    {
        console.log("Error in input : -------------------------------------------------------------",err);
        dispatch({type:types.UPDATE_PASSWORD_FAILED});
    }
}


//Update Name
export const UpdateName = (data) => async dispatch=>{
    var result;
    try{
        dispatch({type:types.UPDATE_NAME_START});
        let queryData = qs.stringify(data);
        const response = await httpRequest.post('/update/name',queryData);
        result = response.data;
        dispatch({type:types.UPDATE_NAME_SUCCESS,payload:result});
        NotifyMessage(result.msg);

    }
    catch(err)
    {
        console.log("Error in input : -------------------------------------------------------------",err);
        NotifyMessage(result.msg);
        dispatch({type:types.UPDATE_PASSWORD_FAILED});
    }
}


//Update Private Mode
export const UpdatePrivateMode = (data) => async dispatch=>{
    var result;
    try{
        dispatch({type:types.UPDATE_PRIVATE_START});
        let queryData = qs.stringify(data);
        const response = await httpRequest.post('/update/privatemode',queryData);
        result = response.data;
        dispatch({type:types.UPDATE_PRIVATE_START,payload:result});
        NotifyMessage(result.msg);

    }
    catch(err)
    {
        console.log("Error in input : -------------------------------------------------------------",err);
        NotifyMessage(result.msg);
        dispatch({type:types.UPDATE_PRIVATE_FAILED});
    }
}


//Update Messages Mode
export const UpdateMessagesMode = (data) => async dispatch=>{
    var result;
    try{
        dispatch({type:types.UPDATE_MESSAGES_START});
        let queryData = qs.stringify(data);
        const response = await httpRequest.post('/update/messagesmode',queryData);
        result = response.data;
        dispatch({type:types.UPDATE_MESSAGES_SUCCESS,payload:result});
        NotifyMessage(result.msg);

    }
    catch(err)
    {
        console.log("Error in input : -------------------------------------------------------------",err);
        NotifyMessage(result.msg);
        dispatch({type:types.UPDATE_MESSAGES_FAILED});
    }
}



//Update Address
export const UpdateAddress = (data) => async dispatch=>{
    var result;
    try{
        dispatch({type:types.UPDATE_ADDRESS_START});
        let queryData = qs.stringify(data);
        const response = await httpRequest.post('/update/address',queryData);
        result = response.data;
        dispatch({type:types.UPDATE_ADDRESS_SUCCESS,payload:result});
        NotifyMessage(result.msg);

    }
    catch(err)
    {
        console.log("Error in input : -------------------------------------------------------------",err);
        NotifyMessage(result.msg);
        dispatch({type:types.UPDATE_ADDRESS_FAILED});
    }
}
