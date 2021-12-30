import React from 'react'
import {View, Text,Image,StyleSheet,TouchableOpacity,ScrollView} from 'react-native'
import { Header } from '../../../components'
import { Button } from '../../../components/form'
import { COLORS, hp, ICONS, IMAGES, wp } from '../../../constants'

const Signup = ({navigation}) =>{
    return(
        <ScrollView style={{backgroundColor:'rgba(0,0,0,0.03)'}}>
            <Header title="ShareClub" Goback={()=>navigation.goBack()} iconName="arrow-left"/>
            <Image source={IMAGES.wallpaper1} style={Styles.img}/>
            <View style={Styles.footer}>
                <View>
                    <Button
                        title="Register as Donor"
                        btnStyle={Styles.btn}
                        onPress={()=>navigation.navigate('donorsignup')}
                    />

                    <Button
                        title="Register as Needy"
                        btnStyle={{...Styles.btn,marginTop:wp(1)}}
                        onPress={()=>navigation.navigate('needysignup')}
                    />
                </View>
                    <TouchableOpacity onPress={()=>navigation.navigate('login')}>
                    <View style={Styles.login}>
                        <Text style={Styles.continueToLogin}>Or continue to login</Text>
                        <ICONS.AntDesign name="arrowright" style={Styles.icon} size={18}/>
                </View>
                    </TouchableOpacity>
            </View>

            
        </ScrollView>
    )
}

export default Signup

const Styles = StyleSheet.create({
    img:{
        height:hp(70),
        width:wp(100)
    },
    footer:{
        backgroundColor:"white",
        height:hp(27),
        width:wp(100),
        borderTopLeftRadius:wp(10),
        borderTopRightRadius:wp(10)
    },
    btn:{
        borderRadius:wp(2),
        width:wp(80),
        marginHorizontal:wp(10),
        marginTop:hp(5),
        backgroundColor:"#006a93"
    },
    login:{
        flexDirection:'row',
        marginTop:hp(2),
        marginHorizontal:wp(30)
    },
    icon:{
        marginTop:hp(0.5),
        marginLeft:wp(1)
    },
    continueToLogin:{
        fontWeight:'bold',
        fontSize:17,
        color:'black'
    }
})