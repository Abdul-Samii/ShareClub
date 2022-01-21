import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, FlatList} from 'react-native'
import { Card3 } from '../../..'
import { Header } from '../../../../components'
import { COLORS, hp, ICONS, IMAGES, wp } from '../../../../constants'

const SearchNearby = ({navigation}) =>{
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

    const handleFlatList = (item) =>{
        return(
            <TouchableOpacity style={Styles.card}>
                <Card3 name={item.name} category={item.category} address={item.address} img={item.img} time={item.time}/>
            </TouchableOpacity>
        )
    }

    return(
        <View style={Styles.container}>
            <Header title="Nearby Donation Ads" iconName="arrow-left" iconRight="bell" Goback={()=>navigation.goBack()}/>
                <FlatList
                    data={adsList}
                    keyExtractor={(item)=>item.name}
                    renderItem={(data)=>handleFlatList(data.item)}
                    showsVerticalScrollIndicator={false}
                />
        </View>
    )
}
export default SearchNearby

const Styles = StyleSheet.create({
    container:{
        height:"100%",
        marginHorizontal:wp(2)
    },
   card:{
       marginTop:hp(2)
   }
})