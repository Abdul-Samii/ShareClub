import React from 'react'
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native'
import { wp,hp,ICONS } from '../../constants'


const Header = ({Goback, title, iconName,iconRight}) =>{
    return(
    <View style={{flexDirection:'row',justifyContent:'center',marginTop:hp(1)}}>
        <TouchableOpacity onPress={()=>Goback()}
            style={Styles.backIcon}
        ><ICONS.Feather name={iconName} 
        color="black" size={20}/></TouchableOpacity>
        <Text style={Styles.heading}>{title}</Text>

        <TouchableOpacity><ICONS.Feather name={iconRight} 
        color="black" size={20} style={Styles.rightIcons}/></TouchableOpacity>
    </View>
    )
}
export default Header

const Styles = StyleSheet.create({
    backIcon:{
        marginLeft:wp(-87),
        marginTop:hp(0.5),
        // position:"absolute",
    },
    rightIcons:{
        marginLeft:wp(80),
        position:"absolute"
    },
    heading:{
        marginLeft:wp(22),
        fontWeight:'bold',
        fontSize:20,
        position:'absolute',
        color:'black',
    },

})