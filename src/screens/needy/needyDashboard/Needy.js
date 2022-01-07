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
        else if(route.name === 'Search')
        {
          iconName= 'search'
        }
        else if(route.name === 'Ads')
        {
          iconName= 'albums-sharp'
        }
        else if(route.name === 'Profile')
        {
          iconName = 'person'
        }
        // You can return any component that you like here!
        return <Text ><ICONS.Ionicons name={iconName} size={30} color={color} /></Text>
     
      },
      tabBarActiveTintColor: COLORS.red1,
      tabBarInactiveTintColor: COLORS.red2,
    })}>
      <Tab.Screen name='Home' component={NeedyDashboard} options={{headerShown:false,title:"Home"}} />
      <Tab.Screen name="Search" component={NeedyDashboard} options={{headerShown:false,title:"Search"}}/>
      <Tab.Screen name="Ads" component={NeedyDashboard} options={{headerShown:false,title:"Ads"}}/>
      <Tab.Screen name="Profile" component={NeedyDashboard} options={{headerShown:false,title:"Profile"}}/>
    </Tab.Navigator >
  
       
      </>
    )
}

export default Needy;

const styles = StyleSheet.create({})