import React from 'react'
import { StyleSheet, Text, View,StatusBar } from 'react-native'
import { COLORS, ICONS, wp } from '../../../constants'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {hp} from '../../../constants'
import { ChatHome, Notification } from '../..'
import DonorDashboard from './DonorDashboard'
import { DonorProfile } from '../donorProfile'
const Tab = createBottomTabNavigator();


const Donor = () => {
    return (
        // later we will wrap this route inside redux provider to access the store all over the application
      <>
      
            <Tab.Navigator 
    screenOptions={({ route }) => ({
      
      tabBarIcon: ({color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home'        
        }
        else if(route.name === 'Notification')
        {
          iconName= 'notifications'
        }
        else if(route.name === 'Ads')
        {
          iconName= 'albums-sharp'
          return <View style={{
            position: 'absolute',
            bottom: 0, // space from bottombar
            height: 68,
            width: 68,
            borderRadius: 68,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text ><ICONS.Ionicons name={iconName}  size={40} color={color} /></Text>
            </View>

        }
        else if(route.name === 'Chat')
        {
          iconName= 'chatbubble-ellipses'
          return <View style={{flexDirection:'row'}}><ICONS.Ionicons name={iconName} size={25} color={color} />
          <Text style={{backgroundColor:COLORS.red1,color:COLORS.white,width:wp(5),height:hp(2.5),fontSize:13,fontWeight:'bold',textAlign:'center',borderRadius:10,marginLeft:wp(-3)}}>2</Text>
          </View>

        }
        else if(route.name === 'Profile')
        {
          iconName = 'person'
        }
        // You can return any component that you like here!
        return <Text ><ICONS.Ionicons name={iconName} size={25} color={color} /></Text>
     
      },
      tabBarActiveTintColor: 'red',
      tabBarInactiveTintColor: COLORS.red2,
      // tabBarStyle: {
      //   backgroundColor: COLORS.white
      // }
      
    })}
    
    
    >
      <Tab.Screen name='Home'  component={DonorDashboard} options={{headerShown:false,title:"Home"}} />
      <Tab.Screen name="Notification" component={Notification} options={{headerShown:false,title:"Notification"}}/>
      <Tab.Screen name="Ads" component={ChatHome} options={{headerShown:false,title:"Ads"}}/>
      <Tab.Screen name="Chat" component={ChatHome} options={{headerShown:false,title:"Chat"}}/>
      <Tab.Screen name="Profile" component={DonorProfile} options={{headerShown:false,title:"Profile"}}/>
    </Tab.Navigator >
  
       
      </>
    )
}

export default Donor;

const styles = StyleSheet.create({})