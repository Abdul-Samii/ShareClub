import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Button } from '../../../../components/form'
import FormInput from '../../../../components/form/FormInput'
import { COLORS, hp, wp } from '../../../../constants'

const RegForm = ({name,setName,password,setPassword,confirmPassword,setConfirmPassword,email,setEmail,cell,setCell,handleReg}) =>{
    return(
        <View style={Styles.inputArea}>
                <FormInput
                    placeholder="Full name"
                    style={Styles.inputField}
                    value={name}
                    onChangeText={(item)=>setName(item)}
                />


                <FormInput
                    placeholder="Email"
                    style={Styles.inputField}
                    keyboardType="email-address"
                    address={email}
                    onChangeText={(item)=>setEmail(item)}
                />

                <FormInput
                    placeholder="Cell number (+923123456789)"
                    style={Styles.inputField}
                    value={cell}
                    onChangeText={(item)=>setCell(item)}
                />

                <FormInput
                    placeholder="Password"
                    style={Styles.inputField}
                    value={password}
                    secureTextEntry={true}
                    onChangeText={(item)=>setPassword(item)}
                />

                <FormInput
                    placeholder="Confirm Password"
                    style={Styles.inputField}
                    secureTextEntry={true}
                    value={confirmPassword}
                    onChangeText={(item)=>setConfirmPassword(item)}
                />

                <Button
                    title="Register"
                    btnStyle={Styles.btn}
                    onPress={()=>handleReg()}
                />
            </View>
    )
}
export default RegForm

const Styles = StyleSheet.create({
    inputArea:{
        marginTop:hp(4)
    },
    inputField:{
        height:hp(7),
        marginTop:hp(0.4),
        marginHorizontal:wp(3)
    },
    btn:{
        backgroundColor:COLORS.red1,
        marginHorizontal:wp(3),
        marginTop:hp(0.3)
    },
})