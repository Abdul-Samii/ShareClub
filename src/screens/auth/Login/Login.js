import AsyncStorage from '@react-native-community/async-storage'
import React,{useState} from 'react'
import {View, Text, StyleSheet, Image,KeyboardAvoidingView, TouchableOpacity} from 'react-native'
import { RadioButton } from 'react-native-paper'
import { connect } from 'react-redux'
import { Button } from '../../../components/form'
import FormInput from '../../../components/form/FormInput'
import Wait from '../../../components/layout/Wait'
import { NotifyMessage } from '../../../components/toast'
import { COLORS, FONTS, hp, ICONS, IMAGES, wp } from '../../../constants'
import { LoginUser } from '../../../store/actions'
import { Header } from '../components'
import RegisterNow from '../components/RegisterNow'
import { AccessToken, GraphRequest, GraphRequestManager, LoginButton, LoginManager } from "react-native-fbsdk"

const Login = (props) => {

    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [type,setType] = useState('needy');
    const [userId,setUserId] = useState();
    const [fbID,setFBID] = useState();

    const StatesRemoving = ()=>
    {
        setEmail("")
        setPassword("")
        setType("needy")
    }
    
    const handleLogin = async() =>{
        var obj;
        var user;
        var RType;
        var loginType = 1;
        !email&&!password?alert("Fill all fields"):
            
            password.length<8? alert("Password should be minimum 8 charactors"):
                   ( obj={email,password,type,loginType}, 
                        await props.LoginUser(obj),
                        StatesRemoving(),
                         user = await AsyncStorage.getItem('userId'),
                         RType = await AsyncStorage.getItem('type'),
                        
                        user&&
                            type==='needy'?
                            props.navigation.navigate('needy')
                            :
                            props.navigation.navigate('donor')
                        

                         
                    )
    }

    const handleFBLogin = async() =>{
        var obj;
        var user;
        var RType;
        var loginType = 2;
        console.log("!!!!!!!!!!!!!!!!!!!!!! ",email);
        console.log("----------------------",fbID)
        !email&&!fbID?alert("Fill all fields"):( obj={email,fbID,type,loginType}, 
                        await props.LoginUser(obj),
                        StatesRemoving(),
                         user = await AsyncStorage.getItem('userId'),
                         RType = await AsyncStorage.getItem('type'),
                        
                        user&&
                            type==='needy'?
                            props.navigation.navigate('needy')
                            :
                            props.navigation.navigate('donor')
                        

                         
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
      setFBID(result.id);
      setEmail(result.email)
      handleFBLogin()
    }
  };

















// console.log(props.msg)
    return(
        <>
        {props.isLoading?<Wait/>:
        
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
            <View style={Styles.radioRow}>
                <Text style={{marginLeft:wp(5),marginTop:hp(1)}}>Needy</Text>
                <RadioButton
                    value={type}
                    status={ type === 'needy' ? 'checked' : 'unchecked' }
                    onPress={() => setType('needy')}
                />
                <Text style={{marginLeft:wp(5),marginTop:hp(1)}}>Donor</Text>
                <RadioButton
                    value={type}
                    status={ type === 'donor' ? 'checked' : 'unchecked' }
                    onPress={() => setType('donor')}
                    size={1}
                />
            </View>

                <View style={Styles.loginBtnView}>
                    <Button title="Login"
                        btnStyle={Styles.loginBtn}
                        onPress={()=>{handleLogin()}}
                    />
                    <Button title="Forgot Password"
                        btnStyle={{...Styles.loginBtn,marginTop:hp(1),backgroundColor:COLORS.red1}}
                        onPress={()=>{props.navigation.navigate('forgotpassword')}}
                    />
                </View>
            </View>
            </View>

            <RegisterNow nav={()=>props.navigation.navigate('signup')}/>

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
                    <TouchableOpacity onPress={()=>onFbLogin()} style={{marginLeft:wp(10)}}>
                        <ICONS.Fontisto
                            name="facebook" 
                            color={COLORS.blue1}
                            size={30}
                            style={{marginLeft:wp(9)}}
                        />
                        <Text style={{fontFamily:FONTS.heading,fontSize:10,marginTop:hp(1)}}>Login with Facebook</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        </KeyboardAvoidingView>
}
</>
    )
}

const mapStateToProps=props=>{
    return{
        isLoading:props.auth.isLoading,
        msg:props.auth.msg
    }
}

export default connect(mapStateToProps,{LoginUser})(Login)

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
    
    },
    radioRow:{
        flexDirection:'row'
    }
})