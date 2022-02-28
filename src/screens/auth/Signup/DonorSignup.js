import React,{useState} from 'react'
import {View, Text, StyleSheet,KeyboardAvoidingView,ScrollView,TouchableOpacity} from 'react-native'
import { ICONS, IMAGES,COLORS,wp,hp, FONTS } from '../../../constants'
import { Header, SubHeader } from '../components'
import { RegForm } from './components'
import { RegisterDonor } from '../../../store/actions'
import { connect } from 'react-redux'
import Wait from '../../../components/layout/Wait'

const DonorSignup = (props) =>{

    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [phone,setPhone] = useState("")
    const [password,setPassword] = useState()
    const [confirmPassword,setConfirmPassword] = useState()
    

    
    const StatesRemoving = ()=>
    {
        setName("")
        setEmail("")
        setPhone("")
        setPassword("")
        setConfirmPassword("")
        props.msg=''
    }


    const handleRegistration = async() =>{
        var obj;
        !name&&!email&&!phone?notifyMessage("Fill all fields"):
            phone.length!=13?alert("Phone number length is invalid"):
             phone[0]!='+'&&phone[1]!='9'&&phone[2]!='2'? alert("Invalid phone number"):
                password.length<8? alert("Password should be minimum 8 charactors"):
                    password !== confirmPassword?alert("Password donot march!"):( obj={name,email,phone,password}, 
                        await props.RegisterDonor(obj),
                        // setTimeout(function(){notifyMessage(props.msg)}, 3000),
                        StatesRemoving()
                        )
                    

                            
                            
        
        
    }


    return(
        <>
        {props.isLoading? <Wait/>:
        <KeyboardAvoidingView behavior='position'>
            <ScrollView>
            <Header img={IMAGES.d2}/>
            <SubHeader title="Register as donor" Goback={()=>props.navigation.goBack()}/>
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

            <RegForm name={name} setName={setName} email={email} setEmail={setEmail} 
            cell={phone} setCell={setPhone} handleReg={handleRegistration} 
            password={password} setPassword={setPassword} confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword}/>

            <TouchableOpacity style={Styles.regView} onPress={()=>props.navigation.navigate('needysignup')}>
                        <Text style={Styles.reg}>Or, register as needy</Text>
                        <ICONS.AntDesign name="arrowright" style={Styles.icon2} size={18}/>
            </TouchableOpacity>
        </ScrollView>
        </KeyboardAvoidingView>
}
    </>
    )
}

const mapStateToProps=props=>{
    return{
        msg:props.auth.msg,
        isLoading:props.auth.isLoading
    }
}
export default connect(mapStateToProps,{RegisterDonor})(DonorSignup)
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
    },
    regView:{
        flexDirection:'row',
        marginTop:hp(2),
        marginHorizontal:wp(30)
    },
    icon2:{
        marginTop:hp(0.3),
        marginLeft:wp(2)
    },
    reg:{
        fontSize:14,
    }
})