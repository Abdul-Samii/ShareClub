import AsyncStorage from '@react-native-community/async-storage';
import React,{useEffect} from 'react'
import {View, Text, StyleSheet,TouchableOpacity, Image} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { Searchbar } from 'react-native-paper';
import { connect } from 'react-redux';
import { Header } from '../../../../components';
import Wait from '../../../../components/layout/Wait';
import { COLORS, hp, ICONS, IMAGES, wp } from '../../../../constants';
import { ViewDonorBookedAds } from '../../../../store/actions';

const CompletedDonorDonations = (props) =>{

    const getBookedAds = async()=>{
        const userId = await AsyncStorage.getItem('userId');
        console.log("> ",userId)
        const obj = {
            userId
        }
        await props.ViewDonorBookedAds(userId)
    }
    useEffect(()=>{
        getBookedAds()
    },[])



    const handleFlatList=(item)=>{
            return(
            
            <View style={Styles.item}>
                <View style={Styles.elevation}><Image source={{uri:item.images[0]}} style={Styles.img}/></View> 
                <View style={Styles.ItemBack}>
                    <View style={{flexDirection:'row'}}>
                        <View style={Styles.detail}>
                            <Text style={Styles.itemName}>Item : {item.title}</Text>
                            <Text style={Styles.quantity}>Category : {item.category.name}</Text>
                            <Text style={Styles.address}>Address : {item.address}</Text>
                        </View>
                        <View style={{marginTop:hp(3),marginLeft:wp(7),position:'absolute',marginLeft:wp(80)}}>
                            <Text style={{fontSize:10}} >{item.time}</Text>
                            <ICONS.MaterialIcons  name="more-vert" size={20} style={{marginTop:hp(1)}}/>
                       </View> 
                    </View>
                </View>
            </View>
        )
    
    }
console.log("YOOOOOOOOOOOOOOOOOO ",props.donationAds)
    return(
        <>
        {props.isLoading?<Wait/>:
        <View style={Styles.container}>
            <Header title="Booked donations" iconName="arrow-left" iconRight="bell" Goback={()=>props.navigation.goBack()}/>
            <Searchbar style={Styles.searchbar}/>

            <FlatList
                data={props.donationAds}
                keyExtractor={(item)=>Math.random()}
                renderItem={(data)=>handleFlatList(data.item)}
                showsVerticalScrollIndicator={false}
            />

        </View>
    }
    </>
    )
}

const mapStateToProps=props=>{
    return{
        donationAds:props.donor.donationAds.completedAds,
        msg:props.needy.msg,
        isLoading:props.donor.isLoad
    }
}
export default connect(mapStateToProps,{ViewDonorBookedAds})(CompletedDonorDonations)

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
        marginLeft:wp(2),
        paddingBottom:5,
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
