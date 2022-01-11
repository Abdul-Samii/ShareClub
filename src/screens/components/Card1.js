import React from 'react'
import {View , Text, StyleSheet, TouchableOpacity,Image} from 'react-native'
import { COLORS, FONTS, hp, IMAGES, wp } from '../../constants'


const Card1 = ({img,cardText,number}) =>{
    return(
        <View>
            <TouchableOpacity>
                <View style={Styles.cardOut} >
                    <Image source={img}  style={Styles.dash1}/>
                <View style={Styles.textView}>
                    <Text style={Styles.ImgText}>{cardText}</Text>
                    <Text style={{...Styles.ImgText,marginLeft:wp(3)}}>- {number}</Text>
                </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Card1

const Styles = StyleSheet.create({
    dash1:{
        height:hp(25),
        width:wp(90), 
        marginHorizontal:wp(5),
        borderRadius:wp(2),
    },
    textView:{
        backgroundColor:COLORS.red1,
        height:hp(6),
        marginHorizontal:wp(5),
        marginTop:hp(-6),
        borderBottomRightRadius:wp(3),
        borderBottomLeftRadius:wp(3),
        flexDirection:'row'
    },
    ImgText:{
        fontSize:17,
        color:'white',
        marginLeft:wp(18),
        marginTop:hp(0.5),
        fontFamily:FONTS.heading
    },
    cardOut:{
        marginTop:hp(2)
    }
})