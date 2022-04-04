import React from 'react'
import {View , Text, StyleSheet, TouchableOpacity,Image} from 'react-native'
import { COLORS, FONTS, hp, IMAGES, wp } from '../../../../constants'


const Statistics = () =>{
    return(
        <View>
            <TouchableOpacity>
                <View style={Styles.statView} >
                    <Image source={IMAGES.dashboard1} style={Styles.dash1}/>
                <View style={Styles.textView}>
                    <Text style={Styles.ImgText}>Booked Donations</Text>
                    <Text style={{...Styles.ImgText,marginLeft:wp(3)}}>- 10</Text>
                </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={Styles.statView} >
                    <Image source={IMAGES.dashboard2} style={Styles.dash1}/>
                <View style={Styles.textView}>
                    <Text style={Styles.ImgText}>Donations Accepted</Text>
                    <Text style={{...Styles.ImgText,marginLeft:wp(3)}}>- 10</Text>
                </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={Styles.statView}>
                    <Image source={IMAGES.dashboard3} style={Styles.dash1}/>
                <View style={Styles.textView}>
                    <Text style={Styles.ImgText}>Donations Rejected</Text>
                    <Text style={{...Styles.ImgText,marginLeft:wp(3)}}>- 10</Text>
                </View>
                </View>
            </TouchableOpacity>

        </View>
    )
}

export default Statistics

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
    statView:{
        marginTop:hp(2)
    }
})