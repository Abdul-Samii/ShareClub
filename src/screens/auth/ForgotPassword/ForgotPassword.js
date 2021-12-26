import React,{useState} from 'react'
import {View, Text, StyleSheet,Image} from 'react-native'
import { Header, SubHeader } from '../components'
import { COLORS, hp, ICONS, IMAGES, wp } from '../../../constants'
import FormInput from '../../../components/form/FormInput'
import { Button } from '../../../components/form'
import RegisterNow from '../components/RegisterNow'

const ForgotPassword = ({navigation}) =>{

    const [email,setEmail] = useState()

    return(
        <View>
            <Header img={IMAGES.clothDonation}/>
            <View style={Styles.content}>
                <SubHeader Goback={()=>navigation.goBack()} title="Forgot your Password?"/>
                <Text style={Styles.subheading}>Dont Worry!</Text>

                <Image source={IMAGES.passwordEmoji} style={Styles.emoji}/>

                <View style={Styles.inputs}>
                    <FormInput
                        placeholder="Enter Email"
                        value={email}
                        onChangeText={(item)=>setEmail(item)}
                        style={Styles.inputField}
                    />

                </View>
                <View style={Styles.btnView}>
                    <Button
                        title="Next"
                        btnStyle={Styles.btn}
                        onPress={()=>{navigation.navigate('resetcode')}}
                    />
                </View>
                <RegisterNow nav={()=>navigation.navigate('signup')}/>
            </View>
        </View>
    )
}

export default ForgotPassword

const Styles = StyleSheet.create({
    content:{

    },
    
    subheading:{
        marginLeft:wp(36),
        fontSize:18,
        fontWeight:'bold'
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