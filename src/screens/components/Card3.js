import React from'react'
import {View, Text, StyleSheet,Image} from 'react-native'
import { COLORS, hp, ICONS, IMAGES, wp } from '../../constants';


const Card3 = ({name, category, address, time, img}) =>{
    return(
        <View style={Styles.card}>
                <Image source={img} style={Styles.img}/>
                <View style={Styles.detail}>
                    <Text style={Styles.name}>Name : {name}</Text>
                    <Text style={Styles.category}>Category : {category}</Text>
                    <Text style={Styles.address}>Address : {address}</Text>
                </View>
                <View style={Styles.timeIcon}>
                    <Text style={Styles.time}>{time}</Text>
                    <ICONS.AntDesign name="rightcircleo" size={20} color={COLORS.red2} style={Styles.icon}/>
                </View>
            </View>
    )
}
export default Card3;

const Styles = StyleSheet.create({
    img:{
        height:hp(15),
        width:wp(25),
    },
    card:{
        width:wp(95),
        height:hp(15),
        flexDirection:'row',
        borderTopRightRadius:wp(5),
        borderBottomRightRadius:wp(5),
        elevation:1,
        
    },
    detail:{
        marginTop:hp(3),
        marginLeft:wp(4)
    },
    name:{
        fontWeight:'bold',
    },
    category:{
        fontWeight:"bold"
    },
    address:{
        fontWeight:'bold'
    },
    timeIcon:{
        marginTop:hp(2),
        marginLeft:wp(8)
    },
    time:{
        fontSize:10,
        color:COLORS.red1
    },
    icon:{
        marginTop:hp(6),
        // marginLeft:wp(1)
    }
})