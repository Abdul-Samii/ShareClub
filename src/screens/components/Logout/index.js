import AsyncStorage from '@react-native-community/async-storage';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';





export const Logout = ({navigation})=>{

    const handleLogout=async()=>{
        const keys =  await AsyncStorage.getAllKeys()
        console.log("keys ",keys)
        await AsyncStorage.multiRemove(keys)
        navigation.navigate('login')

    }    

    useEffect(()=>{
        handleLogout()
    })
        return(
            <View>
                <Text>Something went wrong</Text>

            </View>
        )
}