import React from 'react'
import {View, Text} from 'react-native'
import {TextInput} from 'react-native-paper'
import {wp,hp} from '../../constants'

const FormInput = ({mode,value,onChangeText,keyboardType, placeholder,style, ...rest }) =>{
  return(
    <View>
      <TextInput
      {...rest} 
      placeholder={placeholder}
      mode={mode}
      style={style}
      value={value}
      keyboardType={keyboardType}
      onChangeText={(item)=>onChangeText(item)}
      />
    </View>
  )
}

export default FormInput