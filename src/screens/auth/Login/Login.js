import React from 'react'
import {View, Text, StyleSheet, Image,KeyboardAvoidingView} from 'react-native'
import { Button } from '../../../components/form'
import FormInput from '../../../components/form/FormInput'
import { COLORS, FONTS, hp, IMAGES, wp } from '../../../constants'
const Login = () => {
    return(
        <KeyboardAvoidingView behavior='position'>

            <View style={Styles.header}>
                <Image 
                    source={IMAGES.loginHeader}
                    style={Styles.img}
                />
            </View>
            <View style={Styles.content}>
                <View style={Styles.heading}>
                    <Text style={Styles.headingTxt}>Welcome back!</Text>
                    <Text style={{...Styles.headingTxt,color:COLORS.red1,marginLeft:wp(-3)}}>We miss you alot</Text>
                </View>
            <View style={Styles.inputs}>
                <FormInput
                    placeholder="Email or Username"
                    style={Styles.inputField}
                />

                <FormInput
                    placeholder="Password"
                    style={{...Styles.inputField,marginTop:hp(1)}}
                    secureTextEntry
                />
                <View style={Styles.loginBtnView}>
                    <Button title="Login"
                        btnStyle={Styles.loginBtn}
                    />
                    <Button title="Forgot Password"
                        btnStyle={{...Styles.loginBtn,marginTop:hp(1),backgroundColor:COLORS.red1}}
                    />
                </View>
            </View>
            </View>

            <View style={Styles.footer}>
                <Text>Dont have an account? Register Now</Text>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Login

const Styles = StyleSheet.create({
    header:{
        height:hp(30),
    },
    img:{
        height:hp(30),
        width:wp(84),
        marginLeft:wp(8)
    },
    heading:{
        marginLeft:wp(32),
    },
    headingTxt:{
        fontSize:20,
        fontFamily:FONTS.heading,
        color:COLORS.blue2
    },
    content:{
        marginTop:hp(5)
    },
    inputs:{
        marginTop:hp(2),
    },
    inputField:{
        height:hp(7),
        width:wp(85),
        marginLeft:wp(7)
    },
    loginBtnView:{
        marginLeft:wp(7),
        marginTop:hp(2)
    },
    loginBtn:{
        backgroundColor:COLORS.blue2,
        width:wp(85)
    },
    footer:{
        marginLeft:wp(7),
        marginTop:hp(2)
    }
})