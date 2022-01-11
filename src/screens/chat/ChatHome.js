import React from 'react'
import {View, Text, StyleSheet,TouchableOpacity, Image,ScrollView,FlatList, Touchable} from 'react-native'
import { Header } from '../../components'
import { hp, IMAGES, wp } from '../../constants'

const ChatHome=()=>{
    const users = [
            {name:'sami',img:IMAGES.user},
            {name:'sami',img:IMAGES.user},
            {name:'sami',img:IMAGES.user},
            {name:'sami',img:IMAGES.user},
            {name:'sami',img:IMAGES.user},
            {name:'sami',img:IMAGES.user},
            {name:'sami',img:IMAGES.user},
            {name:'sami',img:IMAGES.user},
            {name:'sami',img:IMAGES.user},
            {name:'sami',img:IMAGES.user}, 
               ]

        const chat=[
            {name:'Abdul Sami', img:IMAGES.user,msg:'Hi! How are you doing?',time:'2MINS AGO',new:2},
            {name:'Shahid Ali', img:IMAGES.user,msg:'Hi! How are you doing?',time:'2MINS AGO',new:1},
            {name:'Iqra Khalid', img:IMAGES.user,msg:'Hi! How are you doing?',time:'2MINS AGO',new:''},
            {name:'Shoib Malik', img:IMAGES.user,msg:'Hi! How are you doing?',time:'2MINS AGO',new:''},
            {name:'Hafeez Malik', img:IMAGES.user,msg:'Hi! How are you doing?',time:'2MINS AGO',new:''},
            {name:'Hassan Ali', img:IMAGES.user,msg:'Hi! How are you doing?',time:'2MINS AGO',new:''},
            {name:'Muhammad Amir', img:IMAGES.user,msg:'Hi! How are you doing?',time:'2MINS AGO',new:''},
            {name:'Abdul Sami', img:IMAGES.user,msg:'Hi! How are you doing?',time:'2MINS AGO',new:''},
        ]


    const handleFlatList=(item)=>{
        return(
            <>
            <TouchableOpacity>
                <View style={Styles.chat}>
                    <Image source={IMAGES.user} style={Styles.userImg}/>
                    <View style={Styles.nameMsg}>
                        <Text style={Styles.name}>{item.name}</Text>
                        <Text>{item.msg}</Text>
                    </View>
                    <View style={Styles.timeNumber}>
                        <Text style={Styles.time}>{item.time}</Text>
                        {item.new ? (<Text style={Styles.number}>{item.new}</Text>):<></>}
                    </View>
                
                </View>
            </TouchableOpacity>
        <View style={Styles.horizontalLine}/>
            </>
        )
    }
    return(
        <View style={Styles.container}>
            <Header title="Messages" iconRight="bell" iconName="search"/>


        <Text style={Styles.userHeading}>Users</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={Styles.userScrollView}>
            {users.map(()=>{
                return(
                    <TouchableOpacity key={Math.random()}>
                        <View  style={Styles.oneUser}>
                        <Image source={IMAGES.user} style={Styles.userImg}/>
                        <Text style={Styles.userName}>Sami</Text>
                        </View>
                     </TouchableOpacity>
                )
            })}  
        </ScrollView>
        
        {/* END */}

    
        
            <FlatList
                data={chat}
                keyExtractor={(item)=>Math.random()}
                renderItem={(data)=>handleFlatList(data.item)}
                showsVerticalScrollIndicator={false}
            />

        </View>
    )
}
export default ChatHome
const Styles = StyleSheet.create({
    container:{
        marginHorizontal:wp(5),
        height:'100%'
    },
    userHeading:{
        fontWeight:'bold',
        marginLeft:wp(2),
        fontSize:16,
        marginTop:hp(2)
    },
    oneUser:{
        marginRight:wp(6)
    },
    userImg:{
        height:hp(7),
        width:wp(13),
        borderRadius:hp(5),
        borderWidth:1,
        borderColor:'red',
        
    },
    userName:{
        textAlign:'center'
    },
    userScrollView:{
        marginTop:hp(2),
        height:hp(15),
        marginLeft:wp(0),
    },
    chat:{
        flexDirection:'row',
        marginTop:hp(2),
    },
    nameMsg:{
        marginTop:hp(1),
        marginLeft:wp(4)
    },
    timeNumber:{
        marginLeft:wp(15),
        marginTop:hp(1)
    },
    time:{
        fontSize:11
    },
    number:{
        backgroundColor:'blue',
        color:'white',
        textAlign:'center',
        width:wp(5),
        borderRadius:wp(10),
        marginTop:hp(0.5),
        marginLeft:wp(9)
    },
    name:{
        fontWeight:'bold'
    },
    horizontalLine:{
        borderBottomWidth:0.4,
        marginTop:hp(2),
        opacity:0.1
    }
})