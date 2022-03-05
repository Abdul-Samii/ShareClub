import React,{useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Header } from '../../../components'
import { COLORS, FONTS, hp, wp } from '../../../constants'

export const Help =(props)=>{


    return (
       
        
        <View style={Styles.container}>
        <Header title="Help" iconName="arrow-left" Goback={()=>props.navigation.goBack()}/>
        <View>
            <Text style={Styles.txt}>Incase of any queries leave mail on the below email address, we will contact you shortly</Text>
            <Text style={Styles.email}>ksamk100474@gmail.com</Text>
        </View>

        </View>

    )
}




const Styles = StyleSheet.create({
    container:{
        height:'100%',
        marginHorizontal:wp(4)
    },
    txt:{
        marginTop:hp(4)
    },
    email:{
        fontFamily:FONTS.heading,
        color:COLORS.red1,
        marginHorizontal:wp(15),
        marginTop:hp(4),
        fontSize:18,
        
    } 
})