import axios from 'axios'
import { Store } from '../store/Store'

const baseURL = 'http://192.168.100.8:6600';

export const httpRequest = axios.create({
    baseURL:baseURL,
});

// export const config={
//     Headers:{
//         'Content-Type': 'application/x-www-form-urlencoded',
//     },
// }

// export const mediaConfig = token=>{
//     const userToken = Store.getState()?.auth?.User?.Token || token;
//     return {
//         headers:{
//             Authorization:'Bearer' + userToken,
//         },
//     };
// };

// export const getConfig = token=>{
//     const userToken = Store.getState()?.auth?.User?.Token || token;
//     return {
//         headers:{
//             'Content-Type' : 'application/json',
//             Authorization:'Bearer' + userToken,
//         },
//     };
// };