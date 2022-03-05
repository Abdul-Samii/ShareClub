import AsyncStorage from '@react-native-community/async-storage'
import React,{useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import { Header, Wait } from '../../../components'
import { Button } from '../../../components/form'
import FormInput from '../../../components/form/FormInput'
import { COLORS, hp, wp } from '../../../constants'
import { UpdateName } from '../../../store/actions'

const ChangeName =(props)=>{
    const [name,setName] = useState();
    


    const handleNameChange= async()=>{
        let obj,userId,type;
        !name?alert("Fill all fields"):
            name.length<8?alert("Name too short"):(
                    userId = await AsyncStorage.getItem('userId'),
                    type = await AsyncStorage.getItem('type'),
                     obj={
                        name,
                        userId,
                        type
                    },
                    await props.UpdateName(obj),
                    props.navigation.goBack()
                )
                     
    }


    return (
       
        
        <View style={Styles.container}>
            <Header title="Change Name" iconName="arrow-left" Goback={()=>props.navigation.goBack()}/>
            <View style={Styles.inputs}>
                <FormInput 
                    placeholder="Enter Name"
                    style={Styles.input}
                    value = {name}
                    onChangeText={(item)=>setName(item)}
                />
            </View>

            <Button
                title="Change Name"
                btnStyle={{backgroundColor:COLORS.red1,marginTop:hp(2)}}
                btnTextStyle={{fontSize:16}}
                onPress={()=>handleNameChange()}
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
export default connect(mapStateToProps,{UpdateName})(ChangeName)


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