import React from 'react';
import {
    ToastAndroid,
    Platform,
    AlertIOS,
  } from 'react-native';

export const NotifyMessage=(msg)=> {
    console.log("msg",msg)
if (Platform.OS === 'android') {
  ToastAndroid.show(msg, ToastAndroid.SHORT)
} else {
  AlertIOS.alert(msg);
}
}