import AsyncStorage from '@react-native-community/async-storage'
import React, { useEffect } from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, FlatList} from 'react-native'
import { connect } from 'react-redux'
import { Card3 } from '../../..'
import { Header } from '../../../../components'
import { COLORS, hp, ICONS, IMAGES, wp } from '../../../../constants'
import { ViewNearbyAds } from '../../../../store/actions'



const SearchNearby = (props) =>{
    const adsList = [
        {name:"Sports Shoes", category:"Shoes", address:"Islamabad, Pakistan", img:IMAGES.user,time:"2MIN"},
        {name:"Jeans Pent", category:"Cloths", address:"Islamabad, Pakistan", img:IMAGES.user,time:"2MIN"},
        {name:"School Bag", category:"Bag", address:"Islamabad, Pakistan", img:IMAGES.user,time:"2MIN"},
        {name:"T-Shirt", category:"Cloths", address:"Islamabad, Pakistan", img:IMAGES.user,time:"2MIN"},
        {name:"Cricket Bat", category:"Sports", address:"Islamabad, Pakistan", img:IMAGES.user,time:"2MIN"},
        {name:"Biryani", category:"Food", address:"Islamabad, Pakistan", img:IMAGES.user,time:"2MIN"},
        {name:"Sports Bag", category:"Bag", address:"Islamabad, Pakistan", img:IMAGES.user,time:"2MIN"},
        {name:"Rain Coat", category:"Cloths", address:"Islamabad, Pakistan", img:IMAGES.user,time:"2MIN"},
        {name:"Sun glasses", category:"Accessories", address:"Islamabad, Pakistan", img:IMAGES.user,time:"2MIN"},
        {name:"Blanket", category:"Cloths", address:"Islamabad, Pakistan", img:IMAGES.user,time:"2MIN"},
        {name:"Books of 5th class", category:"Books", address:"Islamabad, Pakistan", img:IMAGES.user,time:"2MIN"},
    ]


    const getDonationAds = async()=>{
        const userId = await AsyncStorage.getItem('userId');
        const obj = {
            userId
        }
        await props.ViewNearbyAds(userId)
    }
    useEffect(()=>{
        getDonationAds()
    },[5])

    const handleFlatList = (item) =>{
        if(props.route.params)
        {
            if(props.route.params.category == item.category.name)
            {
            return(
                <TouchableOpacity onPress={()=>props.navigation.navigate('detaildonation',{
                    title:item.title,
                    desc:item.description,
                    phone:item.phone,
                    address:item.address,
                    donationId:item._id,
                    type:'search'
                })} style={Styles.card}>
                    <Card3 name={item.title} category={item.category.name} address={item.address} 
                    img={item.images[0]} time={item.createdAt}/>
                </TouchableOpacity>
            )
            }
        }
        else{
        return(
            <TouchableOpacity onPress={()=>props.navigation.navigate('detaildonation',{
                title:item.title,
                desc:item.description,
                phone:item.phone,
                address:item.address,
                donationId:item._id,
                type:'search'
            })} style={Styles.card}>
                <Card3 name={item.title} category={item.category.name} address={item.address} 
                img={item.images[0]} time={item.createdAt}/>
            </TouchableOpacity>
        )
        }

    
    }

    return(
        <View style={Styles.container}>
            <Header title="Nearby Donation Ads" iconName="arrow-left" iconRight="bell" Goback={()=>props.navigation.goBack()}/>
            {/* {
                props.msg === 'No Donation ad availible in your region'&& (
                    <View >
                            <Text>No Donation Ad availible in your</Text>
                    </View>
                )
            } */}
            {props.msg !== 'showing nearby ads'?(
                <View style={Styles.NoAdMsg}>
                        <Text style={Styles.NoAdMsgText}>{props.msg}</Text>
                </View>
            ):(
            <FlatList   
                data={props.donationAds}
                keyExtractor={(item)=>item.name}  
                renderItem={(data)=>handleFlatList(data.item)}
                showsVerticalScrollIndicator={false}
            />
            )
            
            }

            
        </View>
    )
}

const mapStateToProps=props=>{
    return{
        donationAds:props.needy.donationAds,
        msg:props.needy.msg
    }
}
export default connect(mapStateToProps,{ViewNearbyAds})(SearchNearby)

const Styles = StyleSheet.create({
    container:{
        height:"100%",
        marginHorizontal:wp(2)
    },
   card:{
       marginTop:hp(2)
   },
   NoAdMsg:{
       marginTop:hp(35),
       marginLeft:wp(8)
   },
   NoAdMsgText:{
       fontSize:18
   }
})