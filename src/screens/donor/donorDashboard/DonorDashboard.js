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
const DonorDashboard = (props) =>{


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
    },[])

    const handleFuck=()=>{
        props.navigation.navigate('bookeddonations')
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

            {/* <ScrollView horizontal={true} scrollEnabled={categoriesScroll} showsHorizontalScrollIndicator={false} style={{flexDirection:'row'}}> */}

        {/* {
            categories.map((item,index)=>{
                return(
                <Categories key={Math.random()} count={index} navigation={props.navigation} 
                categoryName={item.categoryName} categoryIcon={item.categoryIcon} 
                categoriesScroll={expandCategories} categoriesLength={categories.length}
                />
                )
            })
        } */}
        <Categories categories={categories}/>
        {/* </ScrollView> */}

    <Text style={{fontWeight:"bold",fontSize:16, color:'black', marginLeft:wp(5),marginTop:hp(2)}}>
        Statistics
    </Text>

        
    
    <Card1 img={IMAGES.dashboard1} cardText="Booked Donations" 
    onPress={()=>handleFuck()}

    number="10"/>
    <Card1 img={IMAGES.dashboard2} cardText="Donations Accepted" number="10"/>
    <Card1 img={IMAGES.dashboard3} cardText="Donations Rejected" number={10}/>        


    </ScrollView>
    )
}


const mapStateToProps=props=>{
    return{
        donationAds:props.needy.donationAds,
        msg:props.needy.msg
    }
}
export default connect(mapStateToProps,{ViewBookedAds})(DonorDashboard)


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