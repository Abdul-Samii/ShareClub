import React from 'react'
import {View, Text} from 'react-native'
import { ICONS } from '../../../constants'

const Signup = () =>{
    return(
        <View>
            <Text>Welcome to Registration Page!</Text>
            <ICONS.AntDesign name="googleplus"  size={100}/>
        </View>
    )
}

export default Signup