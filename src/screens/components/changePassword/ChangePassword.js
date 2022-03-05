import AsyncStorage from '@react-native-community/async-storage'
import React,{useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import { Header, Wait } from '../../../components'
import { Button } from '../../../components/form'
import FormInput from '../../../components/form/FormInput'
import { COLORS, hp, wp } from '../../../constants'
import { UpdatePassword } from '../../../store/actions'

const ChangePassword =(props)=>{
    const [currentPassword,setCurrentPassword] = useState();
    const [newPassword,setNewPassword] = useState();
    const [confirmPassword,setConfirmPassword] = useState();


    const handlePasswordChange= async()=>{
        let obj,userId,type;
        !currentPassword || !newPassword || !confirmPassword?alert("Fill all fields"):
            currentPassword.length<8 || newPassword.length<8?alert("Password length should be minimum 8"):
                newPassword!==confirmPassword?alert("Password donot match"):(
                    userId = await AsyncStorage.getItem('userId'),
                    type = await AsyncStorage.getItem('type'),
                     obj={
                        currentPassword,
                        newPassword,
                        userId,
                        type
                    },
                    await props.UpdatePassword(obj),
                    props.navigation.goBack()
                )
                     
    }


    return (
       
        
        <View style={Styles.container}>
            <Header title="Change Password" iconName="arrow-left" Goback={()=>props.navigation.goBack()}/>
            <View style={Styles.inputs}>
                <FormInput 
                    placeholder="Enter Current Password"
                    style={Styles.input}
                    value = {currentPassword}
                    onChangeText={(item)=>setCurrentPassword(item)}
                />

                <FormInput 
                    placeholder="Enter New Password"
                    style={Styles.input}
                    value = {newPassword}
                    onChangeText={(item)=>setNewPassword(item)}
                />

                <FormInput 
                    placeholder="Confirm Password"
                    style={Styles.input}
                    value = {confirmPassword}
                    onChangeText={(item)=>setConfirmPassword(item)}
                />
            </View>

            <Button
                title="Change Password"
                btnStyle={{backgroundColor:COLORS.red1,marginTop:hp(2)}}
                btnTextStyle={{fontSize:16}}
                onPress={()=>handlePasswordChange()}
            />

        </View>

    )
}
const mapStateToProps=props=>{
    return{
        msg:props.update.msg,
        isLoading:props.update.isLoading
    }
}
export default connect(mapStateToProps,{UpdatePassword})(ChangePassword)


const Styles = StyleSheet.create({
    container:{
        height:'100%',
        marginHorizontal:wp(4)
    },
    inputs:{
        marginTop:hp(5)
    },
    input:{
        marginTop:hp(1),
    }
})