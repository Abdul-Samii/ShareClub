import AsyncStorage from '@react-native-community/async-storage'
import React,{useState,useEffect} from 'react'
import {View, Text, StyleSheet,Image,FlatList} from 'react-native'
import { connect } from 'react-redux'
import { Header } from '../../../components'
import { COLORS, hp, ICONS, IMAGES, wp } from '../../../constants'
import { GetNeedy } from '../../../store/actions/NeedyAction'




const NeedyProfile=(props)=>{
    const [name,setName] = useState("")
    const [profession,setProfession] = useState("student")
    const [cell,setCell] = useState("")
    const [email, setEmail] = useState("")
    const [donationAccepted,setDonationAccepted] = useState()
    const [donationPending,setDonationPending] = useState()

    const list=[
        {name:'Address', icon:'location-city'},
        {name:'Change Password', icon:'vpn-key'},
        {name:'Help', icon:'live-help'},
        {name:'Share',icon:'share'},
        {name:'Settings', icon:'settings'},
        {name:'Logout', icon:'logout'},
    ]


    const setNeedyData=()=>{
        setName(props.needy.name)
        setCell(props.needy.phone)
        setEmail(props.needy.email)
        setDonationAccepted(props.needy.acceptedAds?props.needy.acceptedAds.length:"Loading...")
        setDonationPending(props.needy.currentAds?props.needy.currentAds.length:"Loading...")
    }
    const getNeedyData=async()=>{
        needyId = await AsyncStorage.getItem('userId')
        const obj={
            needyId
        }
        await props.GetNeedy(obj)
        setNeedyData()
    }

    useEffect(()=>{
        getNeedyData()
    },[30]);


    const handleFlatlist=(item)=>{
        return(
        <View style={Styles.contactDetail}>
            <View 
                style={{
                    borderBottomWidth:0.5,
                    opacity:0.1
                }}
            />
            <View style={Styles.flex}>
                <ICONS.MaterialIcons name={item.icon} size={17}/>
                <Text style={Styles.itemName}>{item.name}</Text>
            </View>

    </View>

        )
    }

    return(
        <View>
            <Header title="Profile"/>
            <View style={{flexDirection:'row'}}>
                <View style={Styles.top}>
                    <Image source={IMAGES.user} style={Styles.img}/>
                    <View style={Styles.nameDesc}>
                        <Text style={Styles.name}>{name?name:"Loading..."}</Text>
                        <Text>{profession?profession:"Loading..."}</Text>
                    </View>
                </View>
                <ICONS.Feather name="edit" size={17} 
                    style={{position:'absolute',marginLeft:wp(65),marginTop:hp(3.5)}}
                />
            </View>

     <View style={Styles.contactDetail}>

        <View style={Styles.flex}>
            <ICONS.FontAwesome name="phone" size={17}/>
            <Text style={Styles.itemName}>{cell?cell:"Loading..."}</Text>
        </View>

        <View style={Styles.flex}>
            <ICONS.Fontisto name="email" size={17}/>
            <Text style={Styles.itemName}>{email?email:"Loading..."}</Text>
        </View>
    </View>


    <View style={Styles.flex}>
        <View style={Styles.stat}>
            <Text style={{fontSize:25,fontWeight:'bold',textAlign:'center'}}>{donationAccepted}</Text>
            <Text style={{color:COLORS.gray2}}>Donations Accepted</Text>
        </View>
        <View style={Styles.stat}>
            <Text style={{fontSize:25,fontWeight:'bold',textAlign:'center'}}>{donationPending}</Text>
            <Text style={{color:COLORS.gray2}}>Donations Pending</Text>
        </View>
    </View>



    <FlatList
        data={list}
        keyExtractor={(item)=>item.name}
        renderItem={(data)=>handleFlatlist(data.item)}
    />

        </View>
    )
}
const mapStateToProps=props=>{
    return{
        isLoading:props.auth.isLoading,
        needy:props.needy.needyProfile
    }
}

export default connect(mapStateToProps,{GetNeedy})(NeedyProfile)

const Styles = StyleSheet.create({
    top:{
        flexDirection:'row',
        marginTop:hp(3),
        marginLeft:wp(5)
    },
    img:{
        height:hp(10),
        width:wp(20),
        borderRadius:wp(10),
    },
    nameDesc:{
        marginLeft:wp(6)
    },
    name:{
        fontWeight:'bold',
        fontSize:20,

    },
    flex:{
        flexDirection:'row',
        marginTop:hp(2)
    },
    itemName:{
        marginLeft:wp(3),
    },
    contactDetail:{
        marginHorizontal:wp(5),
        marginTop:hp(2)
    },
    stat:{
        marginLeft:wp(10),
        marginTop:hp(2)
    }
})