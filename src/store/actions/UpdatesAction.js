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
