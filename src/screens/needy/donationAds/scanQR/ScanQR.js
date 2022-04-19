import React,{useState,useEffect} from 'react'
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { CompleteDonation } from '../../../../store/actions';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import Wait from '../../../../components/layout/Wait';

const ScanQR = (props) =>{

    const [scan,setScan] = useState()

    onSuccess = e => {
        setScan(e.data)
      };
      console.log(scan)



      const handleCompleteDonation=async()=>{
        var userId, obj;
          scan&&(console.log("HERRRRRRRRRRRRRRRRRRRRRRRRR"),
              userId = await AsyncStorage.getItem('userId'),
           obj={
              userId,
              donationAdId:scan
          },
          await props.CompleteDonation(obj),
        props.navigation.navigate('managedonations'))
      }

useEffect(()=>{
    handleCompleteDonation()
},[scan])
    return(
        <>
        {props.isLoading?<Wait/>:
        <View>


    <QRCodeScanner
            onRead={this.onSuccess}
            // flashMode={RNCamera.Constants.FlashMode.torch}
            topContent={
            <Text style={styles.centerText}>
                Go to{' '}
                <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
                your computer and scan the QR code.
            </Text>
            }
            bottomContent={
            <TouchableOpacity style={styles.buttonTouchable}>
                <Text style={styles.buttonText}>Scan donor QR to complete!</Text>
            </TouchableOpacity>
            }
        />


        </View>
    }
    </>
    )
}

const mapStateToProps=props=>{
    return{
        isLoading:props.needy.isLoading
    }
}

export default connect(mapStateToProps,{CompleteDonation})(ScanQR)

const styles = StyleSheet.create({
    centerText: {
      flex: 1,
      fontSize: 18,
      padding: 32,
      color: '#777'
    },
    textBold: {
      fontWeight: '500',
      color: '#000'
    },
    buttonText: {
      fontSize: 21,
      color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
      padding: 16
    }
  });