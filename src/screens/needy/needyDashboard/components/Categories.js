import React from 'react'
import {View, Text, StyleSheet, } from 'react-native'
import { COLORS, hp, ICONS, wp } from '../../../../constants'

const Categories = () =>{
    return(
        
<View style={{flexDirection:'row'}}>
{/* number 1 */}
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
    )
}

export default Categories

const Styles = StyleSheet.create({
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