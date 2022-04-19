import React from 'react'
import {View,Text,StyleSheet, Image,TouchableOpacity, Touchable,ScrollView} from 'react-native'
import { Card1, Card2 } from '../..'
import { Header } from '../../../components'
import { COLORS, FONTS, hp, IMAGES, wp } from '../../../constants'


const ManageDonorDonations = ({navigation}) =>{
    return(
        <ScrollView showsHorizontalScrollIndicator={true} style={Styles.container}>
            
            <Header title="Manage Donations" iconRight="bell" iconName="menu"/>
            <View style={Styles.cardContainer}>

            <TouchableOpacity onPress={()=>navigation.navigate('adddonation')}>
                <Card2 img={IMAGES.nearby} text="Add New Donations Ad"/>
            </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('bookeddonordonations')}>
                    <Card2 img={IMAGES.hand} text="Booked Donations" />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('completeddonordonations')}>
                    <Card2 img={IMAGES.speaker} text="Donations Completed"/>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
export default ManageDonorDonations
const Styles = StyleSheet.create({
    container:{
        backgroundColor:COLORS.white,
        height:'100%',
        
    },
   cardContainer:{
       marginTop:hp(2)
   }
})