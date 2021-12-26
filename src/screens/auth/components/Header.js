import React from 'react'
import {View, Text, StyleSheet,Image} from 'react-native'
import { hp, wp } from '../../../constants'

const Header = ({img}) =>{
    return(
        <View style={Styles.header}>
                <Image 
                    source={img}
                    style={Styles.img}
                />
        </View>
    )
}
export default Header

const Styles = StyleSheet.create({
    header:{
        height:hp(30),
        width:wp(100)
    },
    img:{
        height:hp(30),
        width:wp(100),
    },
})