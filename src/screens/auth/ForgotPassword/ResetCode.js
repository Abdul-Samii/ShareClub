import React,{useState} from 'react'
import {View, Text, StyleSheet,Image,KeyboardAvoidingView} from 'react-native'
import { Header, SubHeader } from '../components'
import { COLORS, hp, ICONS, IMAGES, wp } from '../../../constants'
import FormInput from '../../../components/form/FormInput'
import { Button } from '../../../components/form'
import RegisterNow from '../components/RegisterNow'
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';

  const CELL_COUNT = 6;

const ResetCode = ({navigation}) =>{
    const [otp, setOtp] = useState('');
    const ref = useBlurOnFulfill({otp, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        otp,
        setOtp,
      });

      const handleReset=()=>{
        otp.length==6?
            navigation.navigate('newpassword')
        :alert("Enter OTP code")
      }


    return(
        <KeyboardAvoidingView behavior='position'>
            <Header img={IMAGES.clothDonation} />
            <View style={Styles.content}>
                <SubHeader Goback={()=>navigation.goBack()} title="Enter OTP Code"/>
                <Text style={Styles.subheading}>Check you email for OTP code</Text>

                <Image source={IMAGES.passwordEmoji} style={Styles.emoji}/>

                <View style={Styles.inputs}>
    

<View style={Styles.otpInput}>
    <CodeField
        ref={ref}
        
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={otp}
        onChangeText={setOtp}
        cellCount={CELL_COUNT}
        rootStyle={Styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[Styles.cell, isFocused && Styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
</View>

                </View>
                <View style={Styles.btnView}>
                    <Button
                        title="Next"
                        btnStyle={Styles.btn}
                        onPress={()=>handleReset()}
                    />
                </View>
                <RegisterNow nav={()=>navigation.navigate('signup')}/>
            </View>
        </KeyboardAvoidingView>
    )
}

export default ResetCode

const Styles = StyleSheet.create({
    content:{

    },
    
    subheading:{
        marginLeft:wp(25),
        marginTop:hp(1),
        fontSize:14,
        // fontWeight:'bold'
    },  
    line:{
        marginHorizontal:wp(10),
        
    },
    emoji:{
        height:hp(15),
        width:wp(30),
        marginLeft:wp(34),
        marginTop:hp(3),
        opacity:0.3
    },
    inputs:{
        marginTop:hp(5)
    },
    otpInput:{
        width:wp(90),
        marginLeft:wp(5)
    },
    inputField:{
        height:hp(7),
        marginHorizontal:wp(4)
    },
    btnView:{
        marginTop:hp(3)
    },
    btn:{
        backgroundColor:COLORS.red1,
        marginHorizontal:wp(4)
    },
    footer:{
        marginLeft:wp(7),
        marginTop:hp(2)
    },
    root: {
        flex: 1,
        padding: 20
    },
  title: {
      textAlign: 'center',
       fontSize: 30
    },
  codeFieldRoot: {
      marginTop: 20
    },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: COLORS.red2,
    textAlign: 'center',
  },
  focusCell: {
    borderColor: COLORS.red1,
  },
})