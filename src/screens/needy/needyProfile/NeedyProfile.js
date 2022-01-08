import React from 'react'
import {View, Text, StyleSheet,Image} from 'react-native'
import {Header} from '../../../components'
import { COLORS, hp, ICONS, IMAGES, wp } from '../../../constants'
const NeedyDashboard=()=>{
    return(
        <View style={Styles.outer}>
            <Header title="Profile" iconName="arrow-left"/>


    <View style={Styles.imgAndDesc}>
            <View style={Styles.pic}>
                 <Image source={IMAGES.user} style={Styles.img}/>
            </View>
            <View style={Styles.desc}>
                <Text style={Styles.name}>Abdul Sami</Text>
                <Text style={Styles.address}>
                    <ICONS.Ionicons name="location-sharp" size={15}/>
                    Islamabad, Pakistan</Text>
                <Text style={Styles.email}>
                <ICONS.MaterialCommunityIcons  name="email" size={15}/>
                       Ksamk100474@gmail.com</Text>
            </View>
    </View>
    
    <View style={Styles.line}/>

    <View style={{flexDirection:'row'}}>

        <View style={Styles.stat}>
            <Text style={Styles.num}>20</Text>
            <Text style={Styles.numDesc}>Donations accepted</Text>
        </View>

            <ICONS.MaterialCommunityIcons name="share-circle" size={45} color={COLORS.red2}/>

        <View  style={Styles.shareIcon}>
        </View>


        <View style={Styles.stat}>
            <Text style={Styles.num}>20</Text>
            <Text style={Styles.numDesc}>Donations accepted</Text>
        </View>

    </View>

        </View>
    )
}

export default NeedyDashboard

const Styles = StyleSheet.create({
    outer:{
        backgroundColor:COLORS.red1,
        height:hp(40)
    },
    pic:{
        marginTop:hp(-1)
    },  
    img:{
        height:hp(13),
        width:wp(21),
        borderRadius:60
    },
    imgAndDesc:{
        flexDirection:'row',
        marginTop:hp(4),
        marginLeft:wp(10)
    },
    desc:{
        marginLeft:wp(6),
    },
    name:{
        color:COLORS.white,
        fontSize:20,
        fontWeight:'bold'
    },
    address:{
        color:COLORS.white,
        fontSize:15,
        marginLeft:wp(-1)
    },
    email:{
        fontSize:15,
        color:COLORS.white,
        marginLeft:wp(-0.5)
    },
    line:{
        borderBottomColor: 'black',
        borderBottomWidth: 0.3,
        marginTop:hp(7)
    },
    num:{
        color:COLORS.white,
        fontSize:22,
        fontWeight:'bold',
        textAlign:'center',
        backgroundColor:'blue'
    },
    numDesc:{
        color:COLORS.white,
        width:wp(40),
    },
    stat:{
        marginLeft:wp(8)
    },
    shareIcon:{
        marginTop:hp(-7),
        marginLeft:wp(-15),
        width: 126,
    height: 180,
    backgroundColor: COLORS.red1,
    borderTopLeftRadius: 108,
    borderTopRightRadius: 108,
    borderBottomLeftRadius: 95,
    borderBottomRightRadius: 95,
    }
})