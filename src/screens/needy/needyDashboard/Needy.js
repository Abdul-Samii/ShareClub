import React  from "react";
import {View, Text} from 'react-native';
import NeedyDashboard from "./NeedyDashboard";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { hp, ICONS } from "../../../constants";
import { Categories } from "./components";

const Tab = createBottomTabNavigator();


const Needy=()=>{
    return(
        <View>
            
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
      
    </View>
    )
}
export default Needy