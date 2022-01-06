import React from 'react'
import { StyleSheet, Text, View,StatusBar } from 'react-native'
import { COLORS, ICONS } from '../../../constants'
import { NeedyDashboard } from '../../needy'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

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
        else if(route.name === 'Post')
        {
          iconName= 'plus-circle'
        }
        else if(route.name === 'Profile')
        {
          iconName = 'user'
        }
        // You can return any component that you like here!
        return <Text ><ICONS.Feather name={iconName} size={35} color={color} /></Text>
     
      },
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: 'lightblue',
    })}>
      <Tab.Screen name='Home' component={NeedyDashboard} options={{headerShown:false,title:""}} />
      <Tab.Screen name="Post" component={NeedyDashboard} options={{headerShown:false,title:""}}/>
      <Tab.Screen name="Profile" component={NeedyDashboard} options={{headerShown:false,title:""}}/>
    </Tab.Navigator >
  
       
      </>
    )
}

export default Needy;

const styles = StyleSheet.create({})