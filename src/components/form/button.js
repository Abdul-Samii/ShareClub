import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { COLORS, FONTS, wp,hp } from '../../constants'

const button = ({title,btnStyle,btnTextStyle,onPress}) =>{
    return(
        <TouchableOpacity
            style={[Styles.btn,btnStyle]}
            onPress={()=>onPress()}
        >
            <Text style={[Styles.btnText,btnTextStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default button
const Styles = StyleSheet.create({
btn:{
    backgroundColor:COLORS.black,
    height:50,
    alignItems:"center",
    justifyContent:"center",
},
btnText:{
    ...FONTS.h1_m,
    color:COLORS.white
}
})