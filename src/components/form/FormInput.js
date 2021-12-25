import React from 'react'
import {View, Text} from 'react-native'
import {TextInput} from 'react-native-paper'
import {wp,hp} from '../../constants'

const FormInput = ({mode, placeholder,style, ...rest }) =>{
  return(
    <View>
      <TextInput
      {...rest} 
      placeholder={placeholder}
      mode={mode}
      style={style}
      />
    </View>
  )
}

export default FormInput