import React from 'react'
import {View, Text} from 'react-native'
import {TextInput} from 'react-native-paper'
import {wp,hp} from '../../constants'

const FormInput = ({mode,value,onChangeText, placeholder,style, ...rest }) =>{
  return(
    <View>
      <TextInput
      {...rest} 
      placeholder={placeholder}
      mode={mode}
      style={style}
      value={value}
      onChangeText={(item)=>onChangeText(item)}
      />
    </View>
  )
}

export default FormInput