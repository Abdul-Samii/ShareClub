import React from 'react'
import {View,Text,StyleSheet, Image,TouchableOpacity, Touchable,ScrollView} from 'react-native'
import { Card1, Card2 } from '../..'
import { Header } from '../../../components'
import { COLORS, FONTS, hp, IMAGES, wp } from '../../../constants'


const ManageDonations = ({navigation}) =>{
    return(
        <ScrollView style={Styles.container}>
            
            <Header title="Manage Donations" iconRight="bell" iconName="menu"/>
            <View style={Styles.cardContainer}>

            <TouchableOpacity onPress={()=>navigation.navigate('searchnearby')}>
                <Card2 img={IMAGES.nearby} text="Search Nearby Donation Ads"/>
            </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('bookeddonations')}>
                    <Card2 img={IMAGES.hand} text="View Booked Donation Ads" />
                </TouchableOpacity>


                <Card2 img={IMAGES.speaker} text="Search Donations in Notifications"/>
            </View>
        </ScrollView>
    )
}
export default ManageDonations
const Styles = StyleSheet.create({
    container:{
        backgroundColor:COLORS.white,
        height:'100%',
        
    },
   cardContainer:{
       marginTop:hp(2)
   }
})