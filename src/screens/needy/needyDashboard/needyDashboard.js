import React from 'react'
import {View, Text, StyleSheet, TextInput, ScrollView,} from 'react-native'
import { Header } from '../../../components'
import { COLORS, hp, wp } from '../../../constants'
import { Card,Paragraph, Title } from 'react-native-paper'
import { Button } from '../../../components/form'
import { Categories, Statistics, TTabs } from './components'

const NeedyDashboard = ({navigation}) =>{

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
                                onPress={()=>navigation.navigate("login")}
                            />
                        </View>
                    </View>
                    </Card.Content>
                </Card>
            </View>


        <Categories/>

    <Text style={{fontWeight:"bold",fontSize:16, color:'black', marginLeft:wp(5),marginTop:hp(2)}}>
        Statistics
    </Text>


    <Statistics/>
        



    </ScrollView>
    )
}

export default NeedyDashboard

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