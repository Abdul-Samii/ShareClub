import React from 'react'
import {View, Text} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Categories } from '.';

const Tab = createBottomTabNavigator();
const TTabs=()=>{
    return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Categories} />
      <Tab.Screen name="Settings" component={Categories}/>
    </Tab.Navigator>
    )
}
export default TTabs