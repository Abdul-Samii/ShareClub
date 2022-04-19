import React, { useState } from 'react'
import {View, Text, ScrollView, RefreshControl} from 'react-native'
import { hp } from '../../constants'

const Refresh = () =>{
    const [refresh,setRefresh] = useState(false)

    const wait = (timeout) => {
      return new Promise(resolve => setTimeout(resolve, timeout));
    }
  const handleRefresh=()=>{
      setRefresh(true);
  wait(2000).then(() => setRefresh(false));
  }
    return (
        <ScrollView style={{height:100,zIndex:1000,backgroundColor:'red'}} refreshControl={
        <RefreshControl style={{zIndex:1000}} progressViewOffset={0} refreshing={refresh} onRefresh={handleRefresh} />} >         
        </ScrollView>
    )
}

export default Refresh