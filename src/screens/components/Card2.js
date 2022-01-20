import React from 'react'
import {View,Text,StyleSheet, Image,TouchableOpacity, Touchable} from 'react-native'
import { COLORS, FONTS, hp, IMAGES, wp } from '../../constants'


const Card2 = ({img, text}) =>{
    return(
        <View style={Styles.container}>
            
                <View style={Styles.cardOuter}>
                    <Image source={img} style={Styles.img}/>
                    <View style={Styles.cardText}>
                        <Text style={Styles.txt}>{text}</Text>
                        <View
                            style={Styles.horizontalLine}
                        />
                    </View>
                </View>

        </View>
    )
}
export default Card2
const Styles = StyleSheet.create({
    container:{
        backgroundColor:COLORS.white,
        
        
    },
    img:{
        height:hp(19),
        width:wp(68),
        marginLeft:wp(5),
        opacity:0.3,
        
    },
    cardOuter:{
        marginTop:hp(2),
       backgroundColor:COLORS.red1,
       height:hp(20),
       width:wp(90),
       flexDirection:'row',
       borderWidth:2,
       borderColor:COLORS.red1,
       borderRadius:wp(10),
       marginHorizontal:wp(5)
    },
    cardText:{
        width:wp(31)
    },
    txt:{
        fontFamily:"FuzzyBubbles-Bold",
        color:COLORS.white,
        fontWeight:'bold',
        marginTop:hp(4),
        marginLeft:wp(-20),
        width:wp(35),
        fontSize:20
    },
    horizontalLine:{
        borderBottomWidth:4,
        borderColor:'white',
        borderRadius:wp(10),
        width:wp(30),
        marginLeft:wp(2),
        marginTop:hp(16),
        position:'absolute',
    }
})