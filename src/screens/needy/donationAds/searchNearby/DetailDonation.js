import AsyncStorage from '@react-native-community/async-storage'
import React from 'react'
import {View, Text, StyleSheet,Image,TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import { Button } from '../../../../components/form'
import { COLORS, hp, ICONS, IMAGES, wp } from '../../../../constants'
import { BookedAds, CancelDonation } from '../../../../store/actions'

const DetailDonation=(props)=>{
    const {desc,title,phone,address,donationId,type,user} = props.route.params

    const handleBookAd=async()=>{
        const userId=await AsyncStorage.getItem('userId')
        const obj={
            userId,
            donationAdId:donationId
        }
        await props.BookedAds(obj)
    }

    const handleCancelDonation=async()=>{
        const userId=await AsyncStorage.getItem('userId')
        const obj={
            userId,
            donationAdId:donationId
        }
        await props.CancelDonation(obj)
    }
    
    return(
        <View>
            <Image
                source={IMAGES.dashboard2}
                style={Styles.img}
                resizeMode="cover"
            />
            <TouchableOpacity style={{position:'absolute'}} onPress={()=>props.navigation.goBack()}>
                <ICONS.AntDesign color={COLORS.white} name="arrowleft" 
                size={22} style={Styles.backArrow} />
            </TouchableOpacity>

            <View style={Styles.detail}>
                <Text style={Styles.title}>{title}</Text>
                <Text style={Styles.desc}>{desc}</Text>
                <Text style={Styles.heading}>Address</Text>
                <Text style={Styles.desc}>{address}</Text>
                <Text style={Styles.heading}>Contact</Text>
                <Text style={Styles.desc}>{phone}</Text>

                {
                    user=="donor"?
                    <Button 
                    title="Generate QR Code" 
                    btnStyle={Styles.btn}
                    btnTextStyle={Styles.btnText}
                    />
                    :
                        type==="search"?
                        <Button 
                        title="Book Now" 
                        btnStyle={Styles.btn}
                        btnTextStyle={Styles.btnText}
                        onPress={()=>handleBookAd()}
                        />
                        :
                        <Button 
                        title="Cancel" 
                        btnStyle={Styles.btn}
                        btnTextStyle={Styles.btnText}
                        onPress={()=>handleCancelDonation()}
                    />
                }
            </View>
        </View>
    )
}

const mapStateToProps=props=>{
    return{
        donationAds:props.needy.donationAds,
        msg:props.needy.msg
    }
}

export default connect(mapStateToProps,{BookedAds,CancelDonation})(DetailDonation)

const Styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    img:{
        height:hp(35),
        width:wp(100),
        
    },
    title:{
        fontSize:20,
        fontWeight:'900',
        color:COLORS.red1
    },
    heading:{
        fontSize:16,
        fontWeight:'bold',
        color:COLORS.red1,
        marginTop:hp(2)
    },
    desc:{
        textAlign:'justify',
        fontSize:16,
        
    },
    detail:{
        marginHorizontal:wp(2),
        marginTop:hp(3),
    },
    btn:{
        backgroundColor:COLORS.red1,
        borderRadius:hp(1),
        marginTop:hp(4),
        height:hp(6)
    },
    btnText:{
        fontSize:16,
        color:COLORS.white
    },
    backArrow:{
        margin:hp(1.5),
        backgroundColor:COLORS.red1,
        borderRadius:hp(2)
    }
})