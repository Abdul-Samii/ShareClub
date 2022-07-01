import AsyncStorage from '@react-native-community/async-storage'
import React,{useEffect, useState} from 'react'
import {View, Text, StyleSheet,TouchableOpacity, Image,ScrollView,FlatList, Touchable, TextInput} from 'react-native'
import { connect } from 'react-redux'
import { Header } from '../../components'
import { hp, ICONS, IMAGES, wp } from '../../constants'
import { GetDonationsMsg } from '../../store/actions'

const ChatHome=(props)=>{

    const [search,setSearch] = useState(false)
    const [Type,setType] = useState()











    
    const getDonationsMsg=async()=>{
        userId = await AsyncStorage.getItem('userId')
        const type = await AsyncStorage.getItem('type');
        setType(type)
        const obj={ type, userId }
        await props.GetDonationsMsg(obj)
    }

    useEffect(()=>{
        getDonationsMsg()
    },[])


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
            <TouchableOpacity onPress={()=>props.navigation.navigate('chatscreen',{recieverId:Type=='needy'?item.owner._id:item.needy._id})}>
                <View style={Styles.chat}>
                    <Image source={{uri:Type=='needy'?item.owner.pic:item.needy.pic}} style={Styles.userImg}/>
                    <View style={Styles.nameMsg}>
                        <Text style={Styles.name}>{Type=='needy'?item.owner.name:item.needy.name}</Text>
                        <Text>Click to View Chat</Text>
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
            {
                search?
                    <>
                        <View style={{flexDirection:'row'}}>
                            <TextInput placeholder='Search...' style={Styles.search}/>
                            <TouchableOpacity onPress={()=>setSearch(false)} style={Styles.searchCloseIcon}>
                                <ICONS.AntDesign name="close"  size={15} />
                            </TouchableOpacity>
                        </View> 
                    </>
                :<Header title="Messages" iconRight="bell" iconName="search" Goback={()=>setSearch(true)}/> 

            }


        <Text style={Styles.userHeading}>Users</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={Styles.userScrollView}>
            {props.donationsMsg.map((item,index)=>{
                console.log("IOIIOIOIOIOI ",item.needy)
                return(
                    <TouchableOpacity key={Math.random()}>
                        <View  style={Styles.oneUser}>
                        <Image source={{uri:Type=='needy'?item.owner.pic:item.needy.pic}} style={Styles.userImg}/>
                        <Text style={Styles.userName}>{Type=='needy'?item.owner.name:item.needy.name}</Text>
                        </View>
                     </TouchableOpacity>
                )
            })}  
             
        </ScrollView>
        
        {/* END */}

    <View style={Styles.chats}>
        <Text style={{...Styles.userHeading,marginTop:hp(-70)}}>Chats</Text>
            <FlatList
                data={props.donationsMsg}
                keyExtractor={(item)=>Math.random()}
                renderItem={(data)=>handleFlatList(data.item)}
                showsVerticalScrollIndicator={false}
            />
    </View>

        </View>
    )
}


const mapStateToProps=props=>{
    console.log("POPOOOOOOOOOOOOOOO ",props.donations.donationsMsg)
    return{
        isLoading:props.auth.isLoading,
        donationsMsg:props.donations.donationsMsg
    }
  }
  
  export default connect(mapStateToProps,{GetDonationsMsg})(ChatHome)






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
    },
    search:{
        borderWidth:0.2,
        height:hp(6),
        marginHorizontal:wp(5),
        borderRadius:wp(1),
        marginTop:hp(2),
        width:wp(90),
        marginLeft:wp(0)
    },
    searchCloseIcon:{
        position:'absolute',
        marginLeft:wp(83),
        marginTop:hp(4)
    }
})