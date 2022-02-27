import {types} from '../actionTypes';
import {httpRequest} from '../../config';
import qs from 'qs';


//Register Needy
export const RegisterNeedy = (data) => async dispatch=>{
    try{
        dispatch({type:types.REGISTER_NEEDY_START});
        let queryData = qs.stringify(data);
        const response = await httpRequest.post('/auth/needy',queryData);
        const result = response.data;
        dispatch({type:types.REGISTER_NEEDY_SUCCESS,payload:result});
    }
    catch(err)
    {
        console.log("Error in input : -------------------------------------------------------------",err);
        dispatch({type:types.REGISTER_NEEDY_FAILED});
    }
}