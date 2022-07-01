import React,{useEffect,useState} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { GetDonationsMsg } from '../../store/actions';

const ChatScreen= (props)=>{
    const [messages, setMessages] = useState([]);
    const [currentUser,setCurrentUser] = useState();
    const {recieverId} = props.route.params
    // const {uid} = route.params;

    // const uid="333";
    const user={
        uid:'444'
    }
    var userId;
    const GetMessages=async()=>{
      
        userId = await AsyncStorage.getItem('userId')
        setCurrentUser(userId)
        const type = await AsyncStorage.getItem('type');
       
      var reciever = recieverId
      var sender = userId
         const docid = reciever>sender? sender+ "-" +reciever : reciever+"-"+sender
        const querySnap = await firestore().collection('Chats')
        .doc(docid)
        .collection('messages')
        .orderBy('createdAt','desc')
        .get()
        const AllMsg = querySnap.docs.map(docSnap=>{
            return{
                ...docSnap.data(),
                createdAt:docSnap.data().createdAt.toDate()
            }
        })
        console.log("lplpl ",AllMsg)
        setMessages(AllMsg)
        
    }


  useEffect(() => {

            GetMessages()
    
  },[9])

















  const onSend = async(messages)=> {
    const sen = await AsyncStorage.getItem('userId')
    const rec = recieverId
    const type = await AsyncStorage.getItem('type');
    
    if(type == 'needy')
    {
      sender = sen,
      reciever = recieverId
    }
    if(type == 'donor')
    {
      sender = sen,
      reciever = recieverId
    }

    const msg=messages[0]
      const myMsg={
          ...msg,
          sentBy:sen,
          sentTo:rec
      }
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    const docid = reciever>sender? sender+ "-" +reciever : reciever+"-"+sender
    firestore().collection('Chats')
    .doc(docid)
    .collection('messages')
    .add({...myMsg,createdAt:firestore.FieldValue.serverTimestamp()})
  }

  return (
      <View style={styles.container}>
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id:currentUser,
      }}
    />
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    }
})

const mapStateToProps=props=>{
  return{
      isLoading:props.auth.isLoading,
      donationsMsg:props.donations.donationsMsg
  }
}

export default connect(mapStateToProps,{GetDonationsMsg})(ChatScreen)