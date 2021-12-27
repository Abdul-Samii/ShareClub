import React from 'react'
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native'
import { wp,hp,ICONS } from '../../constants'


const Header = ({Goback, title}) =>{
    return(
    <View style={{flexDirection:'row',justifyContent:'center',marginTop:hp(1)}}>
        <TouchableOpacity onPress={()=>Goback()}><ICONS.Feather name="arrow-left" 
        color="black" size={20} style={Styles.backIcon}/></TouchableOpacity>
        <Text style={Styles.heading}>{title}</Text>
    </View>
    )
}
export default Header

const Styles = StyleSheet.create({
    backIcon:{
        marginLeft:wp(-48),
        marginTop:hp(0.5)
    },
    heading:{
        marginLeft:wp(22),
        fontWeight:'bold',
        fontSize:20,
        position:'absolute',
        color:'black',
    },

})