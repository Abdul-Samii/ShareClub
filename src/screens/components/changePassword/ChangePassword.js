import React,{useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Header } from '../../../components'
import FormInput from '../../../components/form/FormInput'
import { hp, wp } from '../../../constants'

const ChangePassword =({navigation})=>{
    const [currentPassword,setCurrentPassword] = useState();
    const [newPassword,setNewPassword] = useState();
    const [confirmPassword,setConfirmPassword] = useState();

    return (
        <View style={Styles.container}>
            <Header title="Change Password" iconName="arrow-left" Goback={()=>navigation.goBack()}/>
            <View style={Styles.inputs}>
                <FormInput 
                    placeholder="Enter Current Password"
                    style={Styles.input}
                    value = {currentPassword}
                    onChangeText={(item)=>setNewPassword(item)}
                />

                <FormInput 
                    placeholder="Enter New Password"
                    style={Styles.input}
                    value = {currentPassword}
                    onChangeText={(item)=>setNewPassword(item)}
                />

                <FormInput 
                    placeholder="Confirm Password"
                    style={Styles.input}
                    value = {currentPassword}
                    onChangeText={(item)=>setNewPassword(item)}
                />
            </View>

        </View>
    )
}

export default ChangePassword

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