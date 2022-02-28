import React from 'react'
import {View, ActivityIndicator} from 'react-native'
import { COLORS, hp } from '../../constants';

const Wait = ()=>{
    return (
        <View>
            <ActivityIndicator size={50} style={{marginTop:hp(45),}} color={COLORS.red1}/>
        </View>
    )
}

export default Wait;