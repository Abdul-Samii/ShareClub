import React,{useState} from 'react'
import {View, Text, StyleSheet,KeyboardAvoidingView} from 'react-native'
import { ICONS, IMAGES,COLORS,wp,hp, FONTS } from '../../../constants'
import { Header, SubHeader } from '../components'
import { RegForm } from './components'

const DonorSignup = ({navigation}) =>{

    const [name,setName] = useState()
    const [address,setAddress] = useState()
    const [email,setEmail] = useState()
    const [cell,setCell] = useState()

    const handleRegistration = () =>{
        name&&address&&email&&cell?
                alert("Registration successfull")
        :       alert("Fill all fields")
    }

    return(
        <KeyboardAvoidingView behavior='position'>
            <Header img={IMAGES.d2}/>
            <SubHeader title="Register as donor" Goback={()=>navigation.goBack()}/>
            <View style={Styles.socialSignup}>
                   <View style={Styles.icon}>
                        <ICONS.Fontisto 
                            name="google" 
                            color={COLORS.red2}
                            size={30}
                            style={{marginLeft:wp(5),marginTop:hp(1.5)}}
                        />
                    </View>

                    <View style={{marginLeft:wp(10),...Styles.icon}}>
                        <ICONS.Fontisto
                            name="facebook" 
                            color={COLORS.blue1}
                            size={30}
                            style={{marginLeft:wp(7),marginTop:hp(1.5)}}
                        />
                    </View>
                    
            </View>

            <Text style={Styles.line2}>Or, register with email...</Text>

            <RegForm name={name} setName={setName} address={address} 
            setAddress={setAddress} email={email} setEmail={setEmail} 
            cell={cell} setCell={setCell} handleReg={handleRegistration}/>

        </KeyboardAvoidingView>
    )
}

export default DonorSignup

const Styles = StyleSheet.create({
    socialSignup:{
        flexDirection:'row',
        marginTop:hp(5),
        marginLeft:wp(28)
    },
    icon:{
        height:wp(14),
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.1)',
        borderRadius:wp(3),
        width:wp(18)
    },
    line2:{
        marginLeft:wp(30),
        marginTop:hp(2),
    }
})