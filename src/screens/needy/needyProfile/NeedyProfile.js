import React,{useState} from 'react'
import {View, Text, StyleSheet,Image,FlatList} from 'react-native'
import { Header } from '../../../components'
import { COLORS, hp, ICONS, IMAGES, wp } from '../../../constants'





const NeedyProfile=()=>{
    const [name,setName] = useState("Abdul Sami")
    const [profession,setProfession] = useState("Student")
    const [cell,setCell] = useState("+923181529339")
    const [email, setEmail] = useState("ksamk100474@gmail.com")

    const list=[
        {name:'Address', icon:'location-city'},
        {name:'Change Password', icon:'vpn-key'},
        {name:'Help', icon:'live-help'},
        {name:'Share',icon:'share'},
        {name:'Settings', icon:'settings'},
        {name:'Logout', icon:'logout'},
    ]


    const handleFlatlist=(item)=>{
        console.log(item)
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
                        <Text style={Styles.name}>{name}</Text>
                        <Text>{profession}</Text>
                    </View>
                </View>
                <ICONS.Feather name="edit" size={17} 
                    style={{position:'absolute',marginLeft:wp(65),marginTop:hp(3.5)}}
                />
            </View>

     <View style={Styles.contactDetail}>

        <View style={Styles.flex}>
            <ICONS.FontAwesome name="phone" size={17}/>
            <Text style={Styles.itemName}>{cell}</Text>
        </View>

        <View style={Styles.flex}>
            <ICONS.Fontisto name="email" size={17}/>
            <Text style={Styles.itemName}>{email}</Text>
        </View>
    </View>


    <View style={Styles.flex}>
        <View style={Styles.stat}>
            <Text style={{fontSize:25,fontWeight:'bold',textAlign:'center'}}>23</Text>
            <Text style={{color:COLORS.gray2}}>Donations Accepted</Text>
        </View>
        <View style={Styles.stat}>
            <Text style={{fontSize:25,fontWeight:'bold',textAlign:'center'}}>3</Text>
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
export default NeedyProfile

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