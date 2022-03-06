import AsyncStorage from '@react-native-community/async-storage'
import React,{useEffect, useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Switch } from 'react-native-paper'
import { connect } from 'react-redux'
import { Header, Wait } from '../../../components'
import { Button } from '../../../components/form'
import FormInput from '../../../components/form/FormInput'
import { COLORS, hp, wp } from '../../../constants'
import { GetNeedy, UpdateMessagesMode, UpdateName, UpdatePrivateMode } from '../../../store/actions'

const Settings =(props)=>{
    const [Private,setPrivate] = useState(props.needy.privateMode);
    const [Message,setMessage] = useState(props.needy.allowMessages)


    const handlePrivateMode=async()=>{
        userId = await AsyncStorage.getItem('userId')
        type = await AsyncStorage.getItem('type')
         
        const obj={
            userId,
            type,
            mode:Private?false:true
        }
        await props.UpdatePrivateMode(obj)
    }

    const handleMessages=async()=>{
        userId = await AsyncStorage.getItem('userId')
        type = await AsyncStorage.getItem('type')
        const obj={
            userId,
            type,
            mode:Message?false:true
        }
        await props.UpdateMessagesMode(obj)
    }


    const setData=()=>{
        setPrivate(props.needy.privateMode)
        setMessage(props.needy.allowMessages)
    }

    const getNeedyData=async()=>{
        needyId = await AsyncStorage.getItem('userId')
        const obj={
            needyId
        }
        await props.GetNeedy(obj)
        setData()
    }

    useEffect(()=>{
        getNeedyData()
    },[30]);




    return (
       
        
        <View style={Styles.container}>
            <Header title="Settings" iconName="arrow-left" Goback={()=>props.navigation.goBack()}/>
           
           
           <View style={Styles.row}>
                <View>
                    <Text style={Styles.heading}>Private Mode</Text>
                    <Text style={Styles.details}>Others users won't see your real identity such as name, email, 
                    profile picture,(We recommend to turn on Private Mode )</Text>
                </View>

                <Switch style={Styles.toggle}
                    value={Private}
                    onValueChange={()=>handlePrivateMode()}
                    thumbColor={!Private?COLORS.red2:COLORS.red1}
                />
            </View>


            <View style={Styles.row}>
                <View>
                    <Text style={Styles.heading}>Allow others to message me</Text>
                    <Text style={Styles.details}>(We recommend to turn on this )</Text>
                </View>

                <Switch style={Styles.toggle}
                    value={Message}
                    onValueChange={()=>handleMessages()}
                    thumbColor={!Message?COLORS.red2:COLORS.red1}
                />
            </View>

            

        </View>

    )
}
const mapStateToProps=props=>{
    return{
        isLoading:props.auth.isLoading,
        needy:props.needy.needyProfile,
    }
}

export default connect(mapStateToProps,{GetNeedy,UpdateMessagesMode,UpdatePrivateMode})(Settings)


const Styles = StyleSheet.create({
    container:{
        height:'100%',
        marginHorizontal:wp(4)
    },
    heading:{
        color:COLORS.red1,
        fontWeight:'bold',
        fontSize:16
    },
    details:{
        width:wp(65)
    },
    toggle:{
        marginTop:hp(2),
        marginLeft:wp(75),
        width:wp(12),
        position:'absolute'
    },
    row:{
        marginTop:hp(4)
    }
})