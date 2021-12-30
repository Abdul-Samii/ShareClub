import React from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import { Header } from '../../../components'
import { COLORS, hp, ICONS, wp } from '../../../constants'
import { Card,Paragraph, Title } from 'react-native-paper'
import { Button } from '../../../components/form'

const needyDashboard = () =>{

    return(
        <View>
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
                            />
                        </View>
                    </View>
                    </Card.Content>
                </Card>
            </View>

<View style={{flexDirection:'row'}}>
        <View style={Styles.catgories}>
            <View style={Styles.categoryIcon}>
                <ICONS.MaterialIcons name="food-bank" size={32} color={COLORS.red1}
                    style={{marginLeft:wp(3.5),marginTop:hp(1.7)}}
                />
            </View>
            <View>
                <Text style={Styles.categoryName}>Food</Text>
            </View>
        </View>

{/* number 2 */}
        <View style={Styles.catgories}>
            <View style={Styles.categoryIcon}>
                <ICONS.Foundation name="foot" size={32} color={COLORS.red1}
                    style={{marginLeft:wp(3.5),marginTop:hp(1.7)}}
                />
            </View>
            <View>
                <Text style={Styles.categoryName}>Shoes</Text>
            </View>
        </View>







{/* number 3 */}
        <View style={Styles.catgories}>
            <View style={Styles.categoryIcon}>
                <ICONS.Ionicons name="shirt" size={28} color={COLORS.red1}
                    style={{marginLeft:wp(3.5),marginTop:hp(1.7)}}
                />
            </View>
            <View>
                <Text style={Styles.categoryName}>Clothes</Text>
            </View>
        </View>
{/* number 4 */}
        <View style={Styles.catgories}>
            <View style={Styles.categoryIcon}>
                <ICONS.Entypo name="grid" size={32} color={COLORS.red1}
                    style={{marginLeft:wp(3.5),marginTop:hp(1.7)}}
                />
            </View>
            <View>
                <Text style={Styles.categoryName}>More</Text>
            </View>
        </View>

</View>

<Text style={{fontWeight:"bold",fontSize:16, color:'black', marginLeft:wp(5),marginTop:hp(2)}}>Statistics</Text>

        </View>
    )
}

export default needyDashboard

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
    catgories:{
        marginHorizontal:wp(5),
        marginTop:hp(2)
    },
    categoryIcon:{
        height:hp(8),
        width:wp(15),
        backgroundColor:COLORS.orange4,
        borderRadius:wp(4)
    },
    categoryName:{
        marginLeft:wp(1), 
        textAlign:'center',
        width:wp(12),
        fontSize:13,
        fontWeight:'bold',
        textAlign:'center'
    }
})