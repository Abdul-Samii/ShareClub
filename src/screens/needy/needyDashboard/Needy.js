import React from 'react'
import { StyleSheet, Text, View,StatusBar } from 'react-native'
import { COLORS, ICONS, wp } from '../../../constants'
import { NeedyDashboard } from '../../needy'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {hp} from '../../../constants'
import { NeedyProfile } from '../needyProfile'
import { Notification } from '../..'
const Tab = createBottomTabNavigator();



const Needy = () => {
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
        else if(route.name === 'Search')
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
            <Text ><ICONS.Ionicons name={iconName} size={40} color={color} /></Text>
            </View>

        }
        else if(route.name === 'Ads')
        {
          iconName= 'search'
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
    })}>
      <Tab.Screen name='Home'  component={NeedyDashboard} options={{headerShown:false,title:"Home"}} />
      <Tab.Screen name="Notification" component={Notification} options={{headerShown:false,title:"Notification"}}/>
      <Tab.Screen name="Search" component={NeedyDashboard} options={{headerShown:false,title:"Ads"}}/>
      <Tab.Screen name="Ads" component={NeedyDashboard} options={{headerShown:false,title:"Search"}}/>
      <Tab.Screen name="Profile" component={NeedyProfile} options={{headerShown:false,title:"Profile"}}/>
    </Tab.Navigator >
  
       
      </>
    )
}

export default Needy;

const styles = StyleSheet.create({})