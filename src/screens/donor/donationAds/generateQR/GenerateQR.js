import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import QRCode from 'react-native-qrcode-svg';
import { Header } from '../../../../components';
import { COLORS, hp, IMAGES, wp } from '../../../../constants';

const GenerateQR=(props)=>{
    const {adID} = props.route.params

    return (
        <View style={Styles.container}>
            <Header title="Scan QR" iconName="arrow-left" Goback={()=>props.navigation.goBack()}/>
            <View>
                <Text style={Styles.txt}>Scan the QR Code to process your donation</Text>
            </View>
            <View style={Styles.qr}>
            <QRCode
                 value={adID}
                 size={hp(25)}
            />
            </View>
        </View>
    )
}

export default GenerateQR

const Styles = StyleSheet.create({
    container:{
        height:'100%'
    },
    txt:{
        fontSize:18,
        fontWeight:'bold',
        color:COLORS.red1,
        marginTop:hp(10),
        marginHorizontal:wp(5)
    },
    qr:{
        marginTop:hp(10),
        alignItems:'center'
    }
})