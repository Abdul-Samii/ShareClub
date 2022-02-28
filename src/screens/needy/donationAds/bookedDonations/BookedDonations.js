import React from 'react'
import {View, Text, StyleSheet,TouchableOpacity, Image} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { Searchbar } from 'react-native-paper';
import { Header } from '../../../../components';
import { COLORS, hp, ICONS, IMAGES, wp } from '../../../../constants';

const BookedDonations = ({navigation}) =>{
    const bookedItems=[
        {itemName : 'Shoes', quantity:2, address: 'Islamabad, Pakistan',time:'2hrs'},
        {itemName : 'Books', quantity:2, address: 'Islamabad, Pakistan',time:'2hrs'},
        {itemName : 'Clothes', quantity:2, address: 'Islamabad, Pakistan',time:'2hrs'},
        {itemName : 'Bag', quantity:2, address: 'Islamabad, Pakistan',time:'2hrs'},
        {itemName : 'Food', quantity:2, address: 'Islamabad, Pakistan',time:'2hrs'},
        {itemName : 'Blanket', quantity:2, address: 'Islamabad, Pakistan',time:'2hrs'},
        {itemName : 'Bottle', quantity:2, address: 'Islamabad, Pakistan',time:'2hrs'},
        {itemName : 'Comb', quantity:2, address: 'Islamabad, Pakistan',time:'2hrs'}
    ]



    const handleFlatList=(item)=>{
        return(
            <TouchableOpacity>
            <View style={Styles.item}>
                <View style={Styles.elevation}><Image source={IMAGES.user} style={Styles.img}/></View> 
                <View style={Styles.ItemBack}>
                    <View style={{flexDirection:'row'}}>
                        <View style={Styles.detail}>
                            <Text style={Styles.itemName}>Item : {item.itemName}</Text>
                            <Text style={Styles.quantity}>Quantity : {item.quantity}</Text>
                            <Text style={Styles.address}>Address : {item.address}</Text>
                        </View>
                        <View style={{marginTop:hp(3),marginLeft:wp(7)}}>
                            <Text style={{fontSize:10}} >{item.time}</Text>
                            <ICONS.MaterialIcons  name="more-vert" size={20} style={{marginTop:hp(1)}}/>
                       </View> 
                    </View>
                </View>
            </View>
            </TouchableOpacity>
        )
    }

    return(
        <View style={Styles.container}>
            <Header title="Booked donations" iconName="arrow-left" iconRight="bell" Goback={()=>navigation.goBack()}/>
            <Searchbar style={Styles.searchbar}/>

            <FlatList
                data={bookedItems}
                keyExtractor={(item)=>item.itemName}
                renderItem={(data)=>handleFlatList(data.item)}
                showsVerticalScrollIndicator={false}
            />

        </View>
    )
}

export default BookedDonations;

const Styles = StyleSheet.create({
    container:{
        marginHorizontal:wp(3),
        height:'100%'
    },
    searchbar:{
        borderRadius:wp(3),
        marginTop:hp(2),
        height:hp(6),
        width:wp(90),
        marginLeft:wp(2)
    },
    img:{
        height:hp(13),
        width:wp(25),
        borderRadius:hp(2),
        position:'absolute',
        zIndex:100,
        marginTop:hp(-2),
        marginLeft:wp(4),
    },
    elevation:{
        elevation:10
    },
    item:{
        marginTop:hp(4),
        width:wp(90),
        marginLeft:wp(2)
    },
    ItemBack:{
        backgroundColor:'white',
        height:hp(15),
        borderRadius:hp(3),
        elevation:5
    },
    detail:{
        marginLeft:wp(32),
        marginTop:hp(2)
    },
    itemName:{
        fontSize:12,
        // color:COLORS.black,
        fontWeight:'bold'
    },
    quantity:{
        fontWeight:'bold',
        // color:COLORS.black,
        fontSize:12
    },
    address:{
        fontWeight:'bold',
        // color:COLORS.black,
        fontSize:12
    }
})