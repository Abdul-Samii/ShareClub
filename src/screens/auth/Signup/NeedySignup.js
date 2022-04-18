import React,{useState} from 'react'
import {View, Text, StyleSheet,KeyboardAvoidingView,ScrollView,
    TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import Wait from '../../../components/layout/Wait'
import { Toast } from '../../../components/toast'
import { ICONS, IMAGES,COLORS,wp,hp, FONTS } from '../../../constants'
import { RegisterNeedy } from '../../../store/actions'
import { Header, SubHeader } from '../components'
import { RegForm } from './components'
import {NotifyMessage} from '../../../components/toast'
import { AccessToken, GraphRequest, GraphRequestManager, LoginButton, LoginManager } from "react-native-fbsdk"





const NeedySignup = (props) =>{

    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [phone,setPhone] = useState("")
    const [password,setPassword] = useState()
    const [confirmPassword,setConfirmPassword] = useState()
    const [pic,setProfilePic] = useState()
    const [fbID,setFBID] = useState()


    const StatesRemoving = ()=>
    {
        setName("")
        setEmail("")
        setPhone("")
        setPassword("")
        setConfirmPassword("")
        setProfilePic("")
        setFBID("")
        props.msg=''
    }


    const handleRegistration = async() =>{
        var obj;
        !name&&!email&&!phone?NotifyMessage("Fill all fields"):
            phone.length!=13?alert("Phone number length is invalid"):
             phone[0]!='+'&&phone[1]!='9'&&phone[2]!='2'? alert("Invalid phone number"):
                password.length<8? alert("Password should be minimum 8 charactors"):
                    password !== confirmPassword?alert("Password donot march!"):( obj={name,email,phone,password}, 
                        await props.RegisterNeedy(obj),
                        // setTimeout(function(){notifyMessage(props.msg)}, 3000),
                        StatesRemoving()
                        )
    }












    const handleFBRegistration = async() =>{
        var obj;
        var signupType = 2;
        !name&&!email&&!fbID?NotifyMessage("Your fb is missing required data"):( obj={name,email,pic,fbID,signupType}, 
                        await props.RegisterNeedy(obj),
                        StatesRemoving()
                        // setTimeout(function(){NotifyMessage(props.msg)}, 3000)
                    )        
    }













    const fbLogin=(resCallback)=>{
        LoginManager.logInWithPermissions(['email','public_profile']).then(
            result=>{
                console.log("result==============>>>> ",result);
                if(result.declinedPermissions && result.declinedPermissions.includes('email')){
                    resCallback({message:"Email is required"})
                }
                if(result.isCancelled){
                    console.log("error")
                }
                else{
                   
                    AccessToken.getCurrentAccessToken().then((data) => {
                        console.log(data.accessToken.toString());
                        const processRequest = new GraphRequest(
                          '/me?fields=name,email,picture.type(large)',
                          null,
                          getResponseInfo,
                        );
                        // Start the graph request.
                        new GraphRequestManager()
                          .addRequest(processRequest).start();
                      });
                }
            },
            function(error){
                console.log("Login fail with errors: "+error)
            }
        )
        
    }



const onFbLogin = async() =>{
    try{
        await fbLogin(_responseInfoCallBack)
    }
    catch(err)
    {
        console.log("Error in onFbLogin")
    }
}
const _responseInfoCallBack = async(error,result)=>{
    if(error)
    {
        console.log("Erro showing data")
        return;
    }
    else{
        const userData = result
        console.log("Yooooooo=========> ",userData)
    }
}


const getResponseInfo = (error, result) => {
    if (error) {
      //Alert for the Error
      alert('Error fetching data: ' + error.toString());
    } else {
      //response alert
      console.log(result)
      console.log(JSON.stringify(result));
      setName(result.name);
      setFBID(result.id);
      setProfilePic(result.picture.data.url);
      setEmail(result.email)
      handleFBRegistration()
    }
  };










    return(
        <>
        {props.isLoading? <Wait/>:
        <KeyboardAvoidingView behavior='position'>
            <ScrollView>
            <Header img={IMAGES.d1}/>
            <SubHeader title="Register as Needy" Goback={()=>props.navigation.goBack()}/>
            <View style={Styles.socialSignup}>
                   <View style={Styles.icon}>
                        <ICONS.Fontisto 
                            name="google" 
                            color={COLORS.red2}
                            size={30}
                            style={{marginLeft:wp(5),marginTop:hp(1.5)}}
                        />
                    </View>

                    <TouchableOpacity onPress={()=>onFbLogin()} style={{marginLeft:wp(10),...Styles.icon}}>
                        <ICONS.Fontisto
                            name="facebook" 
                            color={COLORS.blue1}
                            size={30}
                            style={{marginLeft:wp(7),marginTop:hp(1.5)}}
                        />
                    </TouchableOpacity>
                    
            </View>

            <Text style={Styles.line2}>Or, register with email...</Text>

            <RegForm name={name} setName={setName} email={email} setEmail={setEmail} 
            cell={phone} setCell={setPhone} handleReg={handleRegistration} 
            password={password} setPassword={setPassword} confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword}/>

            <TouchableOpacity style={Styles.regView} onPress={()=>props.navigation.navigate('donorsignup')}>
                        <Text style={Styles.reg}>Or, register as donor</Text>
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
export default connect(mapStateToProps,{RegisterNeedy})(NeedySignup)

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