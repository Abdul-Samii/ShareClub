import React,{useState} from 'react'
import {View, Text, StyleSheet, Image,KeyboardAvoidingView} from 'react-native'
import { Button } from '../../../components/form'
import FormInput from '../../../components/form/FormInput'
import { COLORS, FONTS, hp, ICONS, IMAGES, wp } from '../../../constants'
import { Header } from '../components'
import RegisterNow from '../components/RegisterNow'

const Login = ({navigation}) => {

    const [email,setEmail] = useState()
    const [password,setPassword] = useState()

    const handleLogin = () =>{
        email && password ?
        alert("Login Success"):
        alert("Fill all fields")
    }

    return(
        <KeyboardAvoidingView behavior='position'>

            <Header img={IMAGES.loginHeader}/>
            <View style={Styles.content}>
                <View style={Styles.heading}>
                    <Text style={Styles.headingTxt}>Welcome back!</Text>
                    <Text style={{...Styles.headingTxt,color:COLORS.red1,marginLeft:wp(-3)}}>We miss you alot</Text>
                </View>
            <View style={Styles.inputs}>
                <FormInput
                    placeholder="Email or Username"
                    style={Styles.inputField}
                    value={email}
                    onChangeText={(item)=>{setEmail(item)}}
                />

                <FormInput
                    placeholder="Password"
                    style={{...Styles.inputField,marginTop:hp(1)}}
                    onChangeText={(item)=>{setPassword(item)}}
                    value={password}
                    secureTextEntry
                />
                <View style={Styles.loginBtnView}>
                    <Button title="Login"
                        btnStyle={Styles.loginBtn}
                        onPress={()=>{handleLogin()}}
                    />
                    <Button title="Forgot Password"
                        btnStyle={{...Styles.loginBtn,marginTop:hp(1),backgroundColor:COLORS.red1}}
                        onPress={()=>{navigation.navigate('forgotpassword')}}
                    />
                </View>
            </View>
            </View>

            <RegisterNow nav={()=>navigation.navigate('signup')}/>

            <View>
                <View style={Styles.footerBtns}>
                    <View>
                        <ICONS.Fontisto 
                            name="google" 
                            color={COLORS.red2}
                            size={30}
                            style={{marginLeft:wp(7)}}
                        />
                        <Text style={{fontFamily:FONTS.heading,fontSize:10,marginTop:hp(1)}}>Login with Google</Text>
                    </View>
                    <Text style={{marginTop:hp(4),marginLeft:wp(8)}}>or</Text>
                    <View style={{marginLeft:wp(10)}}>
                        <ICONS.Fontisto
                            name="facebook" 
                            color={COLORS.blue1}
                            size={30}
                            style={{marginLeft:wp(9)}}
                        />
                        <Text style={{fontFamily:FONTS.heading,fontSize:10,marginTop:hp(1)}}>Login with Facebook</Text>
                    </View>
                    
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Login

const Styles = StyleSheet.create({
    
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
        marginHorizontal:wp(4)
    },
    loginBtnView:{
        marginTop:hp(2)
    },
    loginBtn:{
        backgroundColor:COLORS.blue2,
        marginHorizontal:wp(4)
    },
    footerBtns:{
        flexDirection:'row',
        marginHorizontal:wp(4),
        marginTop:hp(6),
        marginLeft:wp(15)
    
    }
})