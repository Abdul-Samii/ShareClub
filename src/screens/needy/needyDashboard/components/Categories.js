import React, { useState } from 'react'
import {View, Text, StyleSheet, TouchableOpacity,ScrollView } from 'react-native'
import { COLORS, hp, ICONS, wp } from '../../../../constants'
import { useRef } from 'react';

const Categories = (props) =>{
    console.log("[[[[[[ ",props)
    const [last,setlast] = useState(false)
    const [expandBtnText,setExpandBtnText] = useState("More")
    const [categoriesScroll,setCategoriesScroll] = useState(false)
    
    var count=0;

    const scrollRef = useRef();
    const onPressTouch = () => {
        scrollRef.current?.scrollTo({
          y: 0,
          animated: true,
        });
      }


    const expandCategories=()=>{
        setCategoriesScroll(!categoriesScroll);
        handleScroll()
        setlast(!last)
        onPressTouch()
    }
    const handleExpand=()=>{
        props.categoriesScroll()
    }
    const handleScroll=()=>{
        expandBtnText=="More"?setExpandBtnText("Less"):setExpandBtnText("More") 
        // expandBtnText=="More"?setExpandBtnText("Less"):setExpandBtnText("More")
    }
    return(
        
<View style={{flexDirection:'row'}}>
{/* number 1 */}
       
        
            
<ScrollView scrollsToTop={false} horizontal={true} scrollEnabled={categoriesScroll} 
showsHorizontalScrollIndicator={false} style={{flexDirection:'row'}} ref={scrollRef}>

    {
            props.categories.map((item,index)=>{
                console.log("oooo ooo oo ",item)
                count=count+1
                return(
                <View key={index} style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress = {()=>props.navigation.navigate('searchnearby',{category:item.categoryName})}
                    style={Styles.catgories}>
                        <View style={Styles.categoryIcon}>
                            <ICONS.MaterialCommunityIcons name={item.categoryIcon} size={32} color={COLORS.red1}
                                style={{marginLeft:wp(3.5),marginTop:hp(1.7)}}
                            />
                        </View>
                        <View>
                            <Text style={Styles.categoryName}>{item.categoryName}</Text>
                        </View>
                    </TouchableOpacity>
                     
                        {count==3&&!last&&
                    <TouchableOpacity onPress={expandCategories} style={Styles.catgories}>
                        <View style={Styles.categoryIcon}>
                            <ICONS.Entypo name="grid" size={32} color={COLORS.red1}
                                style={{marginLeft:wp(3.5),marginTop:hp(1.7)}}
                            />
                        </View>
                        <View>
                            <Text style={Styles.categoryName}>{expandBtnText}</Text>
                        </View>
                    </TouchableOpacity>
            }
            {
                count==props.categories.length&&last&&
                <TouchableOpacity onPress={expandCategories} style={Styles.catgories}>
                        <View style={Styles.categoryIcon}>
                            <ICONS.Entypo name="grid" size={32} color={COLORS.red1}
                                style={{marginLeft:wp(3.5),marginTop:hp(1.7)}}
                            />
                        </View>
                        <View>
                            <Text style={Styles.categoryName}>{expandBtnText}</Text>
                        </View>
                    </TouchableOpacity>
                }
                    
                    </View>

                )
            })
        }

        
        
       

</ScrollView>

        {/* <TouchableOpacity onPress = {()=>props.navigation.navigate('searchnearby',{category:'Shoes'})}
         style={Styles.catgories}>
            <View style={Styles.categoryIcon}>
                <ICONS.Foundation name="foot" size={32} color={COLORS.red1}
                    style={{marginLeft:wp(3.5),marginTop:hp(1.7)}}
                />
            </View>
            <View>
                <Text style={Styles.categoryName}>Shoes</Text>
            </View>
        </TouchableOpacity>







        <TouchableOpacity onPress = {()=>props.navigation.navigate('searchnearby',{category:'Clothes'})}
         style={Styles.catgories}>
            <View style={Styles.categoryIcon}>
                <ICONS.Ionicons name="shirt" size={28} color={COLORS.red1}
                    style={{marginLeft:wp(3.5),marginTop:hp(1.7)}}
                />
            </View>
            <View>
                <Text style={Styles.categoryName}>Clothes</Text>
            </View>
        </TouchableOpacity>*/}
 

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