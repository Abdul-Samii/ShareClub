import React,{useState} from 'react'
import {View, Text, StyleSheet,Image,KeyboardAvoidingView} from 'react-native'
import { Header, SubHeader } from '../components'
import { COLORS, hp, ICONS, IMAGES, wp } from '../../../constants'
import FormInput from '../../../components/form/FormInput'
import { Button } from '../../../components/form'
import RegisterNow from '../components/RegisterNow'

const NewPassword = ({navigation}) =>{

    const [password,setPassword] = useState()
    const [confirm,setConfirm] = useState()

    const handleSubmit=()=>{
        password && confirm?
            password.length >= 8?
                password==confirm?
                    alert("Password Changed Sucessfully")
                :   alert("Password donot match")
            : alert("Password lenght must be atleast 8")
        : alert("Fill all fields")
    }

    return(
        <KeyboardAvoidingView behavior='position'>
            <Header img={IMAGES.clothDonation}/>
            <View style={Styles.content}>
                <SubHeader Goback={()=>navigation.goBack()} title="Enter New Password"/>
                <Text style={Styles.subheading}>You are one step away</Text>

                <Image source={IMAGES.happyEmoji} style={Styles.emoji}/>

                <View style={Styles.inputs}>
                    <FormInput
                        placeholder="Password"
                        value={password}
                        onChangeText={(item)=>setPassword(item)}
                        style={Styles.inputField}
                        secureTextEntry
                    />

                     <FormInput
                        placeholder="Confirm Password"
                        value={confirm}
                        onChangeText={(item)=>setConfirm(item)}
                        style={{...Styles.inputField,marginTop:hp(1)}}
                        secureTextEntry
                    />

                </View>
                <View style={Styles.btnView}>
                    <Button
                        title="Submit"
                        btnStyle={Styles.btn}
                        onPress={()=>handleSubmit()}
                    />
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default NewPassword

const Styles = StyleSheet.create({
    content:{

    },
    
    subheading:{
        marginLeft:wp(32),
        fontSize:14,
    },  
    line:{
        marginHorizontal:wp(10),
        
    },
    emoji:{
        height:hp(15),
        width:wp(30),
        marginLeft:wp(33),
        marginTop:hp(3),
        opacity:0.3
    },
    inputs:{
        marginTop:hp(5)
    },
    inputField:{
        height:hp(7),
        marginHorizontal:wp(4)
    },
    btnView:{
        marginTop:hp(1)
    },
    btn:{
        backgroundColor:COLORS.red1,
        marginHorizontal:wp(4)
    },
    footer:{
        marginLeft:wp(7),
        marginTop:hp(2)
    },
})