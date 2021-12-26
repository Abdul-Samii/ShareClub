import React from 'react'
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native'
import { COLORS, hp, wp } from '../../../constants'

const RegisterNow = ({nav}) =>{
    return(
        <View style={Styles.content}>
                <Text>Dont have an account?</Text>
                <TouchableOpacity onPress={()=>nav()}>
                    <Text style={Styles.link}>Register now</Text>
                </TouchableOpacity>
        </View>
    )
}

export default RegisterNow

const Styles = StyleSheet.create({
    content:{
        marginLeft:wp(7),
        marginTop:hp(2),
        flexDirection:'row'
    },
    link:{
        color:COLORS.red1, 
        marginLeft:wp(1)
    }
})