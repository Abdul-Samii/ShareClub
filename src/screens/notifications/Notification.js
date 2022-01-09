import React,{useState}  from "react";
import {View, Text, StyleSheet,Image,FlatList,Modal,TouchableOpacity} from 'react-native'
import { Header } from "../../components";
import { hp, ICONS, IMAGES, wp } from "../../constants";


const Notification = () =>{
    const [modal,setModal] = useState(false)

    const notificationList = [
        {key:1,notification:'Congratulations! You have successfully booked your first Ad.',time:'2d'},
        {key:2,notification:'You have successfully reset your password.',time:'2d'},
        {key:3,notification:'An Ad you were following was cancel by the owner',time:'2d'},
        {key:4,notification:'New donation Ad is posted, please have a look before it disapears',time:'2d'},
        {key:5,notification:'You have successfully booked the Ads. please collect the donation at given location.',time:'2d'},
        {key:6,notification:'Congratulations! You have successfully booked your first Ad.',time:'2d'},
        {key:7,notification:'You have successfully reset your password.',time:'2d'},
        {key:8,notification:'An Ad you were following was cancel by the owner',time:'2d'},
        {key:9,notification:'New donation Ad is posted, please have a look before it disapears',time:'2d'},
        {key:10,notification:'You have successfully booked the Ads. please collect the donation at given location.',time:'2d'},
    ]

    const handleModal = () =>{
        setModal(!modal)
    }

    const handleFlatlist = (item) =>{
        return(
            <>
                <View style={Styles.content}>
                    <View style={Styles.flex}>
                        <Image source={IMAGES.user} style={Styles.img}/>
                        <Text style={Styles.text}>{item.notification}</Text>
                    </View>
                    <View>
                        <Text>{item.time}</Text>
                        <TouchableOpacity onPress={()=>handleModal()}>
                            <ICONS.Entypo name="dots-three-vertical" style={{marginTop:hp(1)}}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{borderBottomWidth:0.5,marginTop:hp(2),opacity:0.1}}/>
            </>
        )
    }


    return(
        
        <View style={Styles.container}>
            <Header title="Notifications"/>
            <FlatList
                data={notificationList}
                keyExtractor={(item)=>item.key}
                renderItem={(data)=>handleFlatlist(data.item)}
            />

<Modal transparent={true}
       visible={modal}
       >


           <View style={Styles.modal}>
           <View style={Styles.modalLine} />
           <TouchableOpacity onPress={()=>handleModal()}>
               <ICONS.AntDesign name="caretdown" style={{marginLeft:wp(90)}}/>
            </TouchableOpacity>


               <View style={Styles.modalItem}>
                    <ICONS.MaterialIcons name="delete" size={25} style={{marginTop:hp(0.5)}}/>
                    <View style={{marginLeft:wp(3)}}>
                        <Text style={{fontSize:17,fontWeight:'bold'}}>Delete</Text>
                        <Text style={{fontSize:10}}>Delete this notification</Text>
                    </View>
               </View>


               <View style={Styles.modalItem}>
                    <ICONS.MaterialCommunityIcons name="bell-off-outline" size={25} style={{marginTop:hp(0.5)}}/>
                    <View style={{marginLeft:wp(3)}}>
                        <Text style={{fontSize:17,fontWeight:'bold'}}>Turn off</Text>
                        <Text style={{fontSize:10}}>Stop recieving notifications like this</Text>
                    </View>
               </View>


               <View style={Styles.modalItem}>
                    <ICONS.MaterialIcons name="settings" size={25} style={{marginTop:hp(0.5)}}/>
                    <View style={{marginLeft:wp(3)}}>
                        <Text style={{fontSize:17,fontWeight:'bold'}}>View settings</Text>
                        <Text style={{fontSize:10}}>View notification settings</Text>
                    </View>
               </View>
           </View>
</Modal>
            
        </View>
    )
}

export default Notification

const Styles = StyleSheet.create({
    container:{
        height:hp(100)
    },
    img:{
        height:hp(5),
        width:wp(10),
        borderRadius:wp(5),
    },
    flex:{
        flexDirection:'row'
    },
    content:{
        flexDirection:'row',
        marginHorizontal:wp(5),
        marginVertical:hp(2),
    },
    text:{
        width:wp(70),
        marginLeft:wp(5)
    },
    modal:{
        marginTop:hp(70),
        height:hp(30),
        backgroundColor:'white'
    },
    modalItem:{
        flexDirection:'row',
        marginTop:hp(2),
        marginLeft:wp(5)
    },
    modalLine:{
        borderWidth:2,
        borderRadius:10,
        width:wp(20),
        marginHorizontal:wp(39),
        marginTop:hp(1)
    }
})