import React, { useEffect, useState } from 'react'
import {View, Text, StyleSheet, TextInput, ScrollView, Alert,} from 'react-native'
import { Header } from '../../../components'
import { COLORS, hp, IMAGES, wp } from '../../../constants'
import { Card,Paragraph, Title } from 'react-native-paper'
import { Button } from '../../../components/form'
import { Categories, Statistics, TTabs } from './components'
import { Card1 } from '../..'
import { connect } from 'react-redux'
import { ViewBookedAds } from '../../../store/actions'
import AsyncStorage from '@react-native-community/async-storage'
import Wait from '../../../components/layout/Wait'
const NeedyDashboard = (props) =>{
    const categories=[
        {categoryName:"Food",categoryIcon:"food"},
        {categoryName:"Clothes",categoryIcon:"tshirt-crew"},
        {categoryName:"Shoes",categoryIcon:"shoe-formal"},
        {categoryName:"yo",categoryIcon:"shoe-formal"},
        {categoryName:"jo",categoryIcon:"shoe-formal"}
    ]

    // const [categoriesScroll,setCategoriesScroll] = useState(false)

    const expandCategories=()=>{
        setCategoriesScroll(!categoriesScroll);
    }


    const getBookedAds = async()=>{
        const userId = await AsyncStorage.getItem('userId');
        const obj = {
            userId
        }
        await props.ViewBookedAds(userId)
    }
    useEffect(()=>{
        getBookedAds()
    },[8])

    const handleFuck=()=>{
        props.navigation.navigate('bookeddonations')
    }
    return(
        <>
        {props.isLoading?<Wait/>:
        <ScrollView>
            <Header title="ShareClub" iconName="menu" iconRight="bell"/>
            <TextInput placeholder='Search...' style={Styles.search}/>
            <View>
                <Card elevation={5} style={Styles.card}>
                    <Card.Content>
                    <View style={{flexDirection:'row'}}>
                        <View>
                            <Title style={{color:'white'}}>Start Now</Title>
                            <Paragraph style={{color:'white'}}>Search new donation..</Paragraph>
                        </View>
                        <View>
                            <Button title="Start Now"
                                btnStyle={Styles.btnTop}
                                btnTextStyle={{color:'black'}}
                                onPress={()=>props.navigation.navigate('searchnearby')}
                            />
                        </View>
                    </View>
                    </Card.Content>
                </Card>
            </View>

           
        <Categories categories={categories} navigation={props.navigation}/>
        {/* </ScrollView> */}

    <Text style={{fontWeight:"bold",fontSize:16, color:'black', marginLeft:wp(5),marginTop:hp(2)}}>
        Statistics
    </Text>

        
    
    <Card1 img={IMAGES.dashboard1} cardText="Booked Donations" 
    onPress={()=>handleFuck()}

    number="10"/>
    <Card1 img={IMAGES.dashboard2} cardText="Donations Accepted" number="10"/>
    <Card1 img={IMAGES.dashboard3} cardText="Donations Completed" number={10}/>        


    {/* <Card1 img={IMAGES.dashboard1} cardText="Booked Donations" 
    onPress={()=>handleFuck()} number={props.donationAds?props.donationAds.bookedAds.length:"..."}/>
    
    <Card1 img={IMAGES.dashboard3} cardText="Completed Donations" 
    onPress={()=>props.navigation.navigate('completedneedydonations')} number={props.donationAds?props.donationAds.completedAds.length:"..."}/>         */}



    </ScrollView>
    
    }
    </>
    )
}


const mapStateToProps=props=>{
    return{
        donationAds:props.needy.donationAds,
        msg:props.needy.msg,
        isLoading:props.needy.isLoading
    }
}
export default connect(mapStateToProps,{ViewBookedAds})(NeedyDashboard)


const Styles = StyleSheet.create({
    search:{
        borderWidth:0.2,
        height:hp(6),
        marginHorizontal:wp(5),
        borderRadius:wp(1),
        marginTop:hp(2)
    },
    card:{
        marginHorizontal:wp(5),
        borderRadius:wp(1),
        backgroundColor:COLORS.red2,
        marginTop:hp(2)
    },
    btnTop:{
        backgroundColor:'white',
        width:wp(27),
        borderRadius:wp(3),
        marginLeft:wp(14),
        marginTop:hp(0.7),
        height:hp(6)
    },
    
})