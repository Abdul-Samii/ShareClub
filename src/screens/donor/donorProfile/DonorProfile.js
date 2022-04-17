import AsyncStorage from '@react-native-community/async-storage'
import React,{useState,useEffect} from 'react'
import {View, Text, StyleSheet,Image,FlatList, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import { Header } from '../../../components'
import { COLORS, hp, ICONS, IMAGES, wp } from '../../../constants'
import { GetDonor } from '../../../store/actions'




const DonorProfile=(props)=>{
    const [name,setName] = useState("")
    const [profession,setProfession] = useState("student")
    const [cell,setCell] = useState("")
    const [email, setEmail] = useState("")
    const [donationAccepted,setDonationAccepted] = useState()
    const [donationPending,setDonationPending] = useState()
    const [dp,setDP] = useState()

    const list=[
        {name:'Address', icon:'location-city',nav:'address'},
        {name:'Change Password', icon:'vpn-key',nav:'changepassword'},
        {name:'Help', icon:'live-help',nav:'help'},
        {name:'Share',icon:'share',nav:'changepassword'},
        // {name:'Settings', icon:'settings',nav:'settings'},
        {name:'Logout', icon:'logout',nav:'logout'},
    ]


    const setDonorData=()=>{
        setName(props.donor.name)
        setCell(props.donor.phone)
        setEmail(props.donor.email)
        setDP(props.donor.pic)
        // setDonationAccepted(props.donor.acceptedAds?props.donor.acceptedAds.length:"Loading...")
        // setDonationPending(props.donor.currentAds?props.donor.currentAds.length:"Loading...")
    }
    const getDonorData=async()=>{
        donorId = await AsyncStorage.getItem('userId')
        const signupType = await AsyncStorage.getItem('signupType')
        const obj={
            donorId,
            signupType
        }
        await props.GetDonor(obj)
        setDonorData()
    }

    useEffect(()=>{
        getDonorData()
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
            <TouchableOpacity style={Styles.flex} onPress={()=>props.navigation.navigate(item.nav)}>
                <ICONS.MaterialIcons name={item.icon} size={17}/>
                <Text style={Styles.itemName}>{item.name}</Text>
            </TouchableOpacity>

    </View>

        )
    }

    return(
        <View>
            <Header title="Profile"/>
            <View style={{flexDirection:'row'}}>
                <View style={Styles.top}>
                    {
                    dp?<Image source={{uri:dp}} style={Styles.img}/>:
                    <Image source={IMAGES.user} style={Styles.img}/>
                    
                    }
                    <View style={Styles.nameDesc}>
                        <Text style={Styles.name}>{name?name:"Loading..."}</Text>
                        <Text>{profession?profession:"Loading..."}</Text>
                    </View>
                </View>

                <TouchableOpacity style={{position:'absolute',marginLeft:wp(65),marginTop:hp(3.5)}} 
                    onPress={()=>props.navigation.navigate('changename')}>
                    <ICONS.Feather name="edit" size={17}/>
                </TouchableOpacity>
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


    {/* <View style={Styles.flex}>
        <View style={Styles.stat}>
            <Text style={{fontSize:25,fontWeight:'bold',textAlign:'center'}}>{donationAccepted}</Text>
            <Text style={{color:COLORS.gray2}}>Donations Given</Text>
        </View>
        <View style={Styles.stat}>
            <Text style={{fontSize:25,fontWeight:'bold',textAlign:'center'}}>{donationPending}</Text>
            <Text style={{color:COLORS.gray2}}>Donations Pending</Text>
        </View>
    </View> */}



    <FlatList
        data={list}
        keyExtractor={(item)=>item.name}
        renderItem={(data)=>handleFlatlist(data.item)}
    />

        </View>
    )
}
const mapStateToProps=props=>{
    console.log("MAIN ---- ",props.donor)
    return{
        isLoading:props.auth.isLoading,
        donor:props.donor.donorProfile
    }
}

export default connect(mapStateToProps,{GetDonor})(DonorProfile)

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