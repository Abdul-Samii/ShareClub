import React, { useState } from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import { Header } from '../../../components'
import { COLORS, hp, ICONS, wp } from '../../../constants'

const Address = () =>{
    const [cityEdit,setCityEdit] = useState(false)
    const [countryEdit,setCountryEdit] = useState(false)
    const [addressEdit,setAddressEdit] = useState(false)

    const [city,setCity] = useState("Islamabad")
    const [country,setCountry] = useState("Pakistan")
    const [address,setAddress] = useState("DHA,house#01")
    
//     fetch("https://countriesnow.space/api/v0.1/countries/state/cities", {
// 	"method": "POST",
//     headers: {
//         'Accept': 'application/json, text/plain, */*',
//         'Content-Type': 'application/json'
//       },
//     body:JSON.stringify({country:"pakistan",state:"punjab"})
// })
// .then(function(res){ return res.json(); })
// .then(function(data){ alert( JSON.stringify( data ) ) })
// .catch(err => {
// 	console.error(err);
// });

    return(
        <View style={Styles.container}>
            <Header title="Address" iconName="arrow-left" Goback={()=>props.navigation.goBack()}/>
           
           
           <View style={Styles.row}>
                <View>
                    <Text style={Styles.heading}>City</Text>
                    {
                        cityEdit?
                        <TextInput
                            value={city}
                            onChangeText={(item)=>setCity(item)}
                            style={Styles.editField}
                        />
                        :
                        <Text style={Styles.details}>{city}</Text>
                    }
                </View>
                <TouchableOpacity style={Styles.editIcon} 
                    onPress={()=>setCityEdit(true)}>
                    <ICONS.Feather name="edit" size={17}/>
                </TouchableOpacity>
            </View>

            <View style={Styles.row}>
                <View>
                    <Text style={Styles.heading}>Country</Text>
                    {
                        countryEdit?
                        <TextInput
                            value={city}
                            onChangeText={(item)=>setCity(item)}
                            style={Styles.editField}
                        />
                        :
                        <Text style={Styles.details}>{country}</Text>
                    }
                </View>
            </View>

            <View style={Styles.row}>
                <View>
                    <Text style={Styles.heading}>Address</Text>
                    {
                        addressEdit?
                        <TextInput
                            value={city}
                            onChangeText={(item)=>setCity(item)}
                            style={Styles.editField}
                        />
                        :
                        <Text style={Styles.details}>{address}</Text>
                    }
                </View>
            </View>
        </View>
    )
}

export default Address

const Styles = StyleSheet.create({
    container:{
        height:'100%',
        marginHorizontal:wp(4)
    },
    heading:{
        color:COLORS.red1,
        fontWeight:'bold',
        fontSize:16
    },
    details:{
        width:wp(65)
    },
    row:{
        marginTop:hp(4)
    },
    editIcon:{
        position:'absolute',
        marginLeft:wp(80),
        marginTop:hp(0.5)
    },
    editField:{
        backgroundColor:COLORS.lightBg2,
        color:COLORS.black,
        fontSize:16,
        width:wp(75),borderRadius:hp(1)
    }
})