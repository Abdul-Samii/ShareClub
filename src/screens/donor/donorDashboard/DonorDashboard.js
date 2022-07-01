import React, { useEffect, useState } from 'react'
import {View, Text, StyleSheet, TextInput, ScrollView, Alert,} from 'react-native'
import { Header } from '../../../components'
import { COLORS, hp, IMAGES, wp } from '../../../constants'
import { Card,Paragraph, Title } from 'react-native-paper'
import { Button } from '../../../components/form'
import { Categories, Statistics, TTabs } from './components'
import { Card1 } from '../..'
import { connect } from 'react-redux'
import { ViewDonorBookedAds } from '../../../store/actions'
import AsyncStorage from '@react-native-community/async-storage'
const DonorDashboard = (props) =>{


    
    console.log("O ",props.donationAds)


    const getBookedAds = async()=>{
        const userId = await AsyncStorage.getItem('userId');
        const obj = {
            userId
        }
        await props.ViewDonorBookedAds(userId)
    }
    useEffect(()=>{
        getBookedAds()
    },[])

    const handleFuck=()=>{
        props.navigation.navigate('bookeddonordonations')
    }
    return(
        <ScrollView>
            <Header title="ShareClub" iconName="menu" iconRight="bell"/>
            <TextInput placeholder='Search...' style={Styles.search}/>
            <View>
                <Card elevation={5} style={Styles.card}>
                    <Card.Content>
                    <View style={{flexDirection:'row'}}>
                        <View>
                            <Title style={{color:'white'}}>Start Now</Title>
                            <Paragraph style={{color:'white'}}>Add new donation..</Paragraph>
                        </View>
                        <View>
                            <Button title="Start Now"
                                btnStyle={Styles.btnTop}
                                btnTextStyle={{color:'black'}}
                                onPress={()=>props.navigation.navigate('adddonation')}
                            />
                        </View>
                    </View>
                    </Card.Content>
                </Card>
            </View>

           

    <Text style={{fontWeight:"bold",fontSize:16, color:'black', marginLeft:wp(5),marginTop:hp(2)}}>
        Statistics
    </Text>

        

    <Card1 img={IMAGES.dashboard1} cardText="Active Donations" 
    onPress={()=>handleFuck()} number={10}/>
    <Card1 img={IMAGES.dashboard2} cardText="Booked Donations" 
    onPress={()=>props.navigation.navigate('bookeddonordonations')} number={10}/>
    <Card1 img={IMAGES.dashboard3} cardText="Completed Donations" 
    onPress={()=>props.navigation.navigate('completeddonordonations')} number={10}/>        



    
    {/* <Card1 img={IMAGES.dashboard1} cardText="Active Donations" 
    onPress={()=>handleFuck()} number={props.donationAds?props.donationAds.activeAds.length:"..."}/>
    <Card1 img={IMAGES.dashboard2} cardText="Booked Donations" 
    onPress={()=>props.navigation.navigate('bookeddonordonations')} number={props.donationAds?props.donationAds.bookedAds.length:"..."}/>
    <Card1 img={IMAGES.dashboard3} cardText="Completed Donations" 
    onPress={()=>props.navigation.navigate('completeddonordonations')} number={props.donationAds?props.donationAds.completedAds.length:"..."}/>         */}


    </ScrollView>
    )
}


const mapStateToProps=props=>{
    return{
        donationAds:props.donor.donationAds,
        msg:props.donor.msg
    }
}
export default connect(mapStateToProps,{ViewDonorBookedAds})(DonorDashboard)


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