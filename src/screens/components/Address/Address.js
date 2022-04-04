import React, { useEffect, useReducer, useState } from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput,Picker} from 'react-native'
import { Header } from '../../../components'
import { COLORS, hp, ICONS, wp } from '../../../constants'
import RNPickerSelect from 'react-native-picker-select'
import { UpdateAddress } from '../../../store/actions'
import { connect } from 'react-redux'
import { Button } from '../../../components/form'
import AsyncStorage from '@react-native-community/async-storage'

const Address = (props) =>{

    const [isEdit,setIsEdit] = useState(false)
    const [city,setCity] = useState()
        const [country,setCountry] = useState()
        const [state,setState] = useState()
        const [address,setAddress] = useState("DHA,house#01")
    const handleAddressStates=async()=>{
        const type = await AsyncStorage.getItem('type')
        if(type==="needy")
        {
        const [city,setCity] = useState(props.needy.city)
        const [country,setCountry] = useState(props.needy.country)
        const [state,setState] = useState()
        const [address,setAddress] = useState("DHA,house#01")
        }
        if(type==="donor")
        {
        const [city,setCity] = useState(props.donor.city)
        const [country,setCountry] = useState(props.donor.country)
        const [state,setState] = useState()
        const [address,setAddress] = useState("DHA,house#01")
        }
    }
    
    const [allCountries,setAllCountries] = useState([])
    const [allStates,setAllStates] = useState([])
    const [allCities,setAllCities] = useState([])

    const [pickerListCountry,setPickerListCountry] = useState([])
    const [pickerListState,setPickerListState] = useState([])
    const [pickerListCity,setPickerListCity] = useState([])


const fetchCountries=async()=>{
    await fetch("https://countriesnow.space/api/v0.1/countries/capital", {
        "method": "GET",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
        // body:JSON.stringify({country:"pakistan",state:"Khyber Pakhtunkhwa"})
    })
    .then(function(res){ return res.json(); })
    .then(function(item){ setAllCountries(item.data) })
    .catch(err => {
        console.error(err);
    });
}

const fetchStates=async()=>{
    await fetch("https://countriesnow.space/api/v0.1/countries/states", {
        "method": "POST",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({country:country})
    })
    .then(function(res){ return res.json(); })
    .then(function(item){ setAllStates(item.data.states) })
    .catch(err => {
        console.error(err);
    });
    // console.log(allStates)
}


const fetchCities=async()=>{
    await fetch("https://countriesnow.space/api/v0.1/countries/state/cities", {
        "method": "POST",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({country:country,state:state})
    })
    .then(function(res){ return res.json(); })
    .then(function(item){ setAllCities(item.data) })
    .catch(err => {
        console.error(err);
    });
    
}

const setCountries1=()=>{
    var myMap = [];
    allCountries.map((item,index)=>{
   myMap.push({"label":item.name,"value":item.name})
   
})
setPickerListCountry(myMap)
// console.log("pickerListCountry",pickerListCountry)
}

const setStates1=()=>{
    var myMap = [];
    allStates.map((item,index)=>{
   myMap.push({"label":item.name,"value":item.name})
   
})
setPickerListState(myMap)
// console.log("pickerListCountry",pickerListCountry)
}

const setCities1=()=>{
    var myMap = [];
    allCities.map((item,index)=>{
   myMap.push({"label":item,"value":item})
   
})
setPickerListCity(myMap)
// console.log("pickerListCountry",pickerListCountry)
}



useEffect(()=>{
    handleAddressStates()
    fetchCountries()
    setCountries1()
    // fetchStates()
    // setStates1()
    // fetchCities()
    // setCities1()
    handleSetCountry()
    handleSetCity()
},[country,city])


const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  function handleClick() {
    forceUpdate();
  }

const handleSetCountry=()=>{
    country&&(
        console.log("------------------",country),
        fetchStates()
    ).then(()=>{
        setStates1()
    }).then(()=>{
        handleClick()
    }) 
     
}
const handleSetCity=()=>{
    state&&(
        console.log("------------------",city),
        fetchCities()
    ).then(()=>{
        setCities1()
    }).then(()=>{
        handleClick()
    }) 
     
}



const handleAddressUpdate=async()=>{
    let obj;
    city&&country&&state?(
    userId = await AsyncStorage.getItem('userId'),
    type = await AsyncStorage.getItem('type'),
     obj={
        userId,
        type,
        city,
        country,
        state,
        address:"Yo"
    },
    await props.UpdateAddress(obj),
    setIsEdit(false)
    ):alert("Fill all Fields")
}


return(
        <View style={Styles.container}>
            <Header title="Address" iconName="arrow-left" Goback={()=>props.navigation.goBack()}/>
           
           
           {/* <View style={Styles.row}>
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
            </View> */}

            <View style={Styles.row}>
                <View>
                    <Text style={Styles.heading}>Country</Text>
                    {
                        isEdit?
                    <RNPickerSelect
                        onValueChange={async(value) => 
                            {
                                console.log("------------------",value)
                                setCountry(value)
                                console.log("------------------>>",country)

                            // country&&(
                            //     // console.log("------------------",country),
                            //     fetchStates()
                            // ).then(()=>{
                            //     setStates1()
                            // }).then(()=>{
                            //     handleClick()
                            // }) 
                             
                            
                            
                            
                        }}
                        items={pickerListCountry}
                    />
                    : <Text style={Styles.details}>{country}</Text>
                    }
                </View>
            </View>

            <View style={Styles.row}>
                <View>
                    <Text style={Styles.heading}>State</Text>
                    {
                        isEdit?
                    <RNPickerSelect
                        onValueChange={(value) =>{
                             setState(value)
                            //  fetchCities()
                            //  setCities1()
                            //  handleClick()
                            }}
                        items={pickerListState}
                    />
                    : <Text style={Styles.details}>{state}</Text>
                        }
                </View>
            </View>

            <View style={Styles.row}>
                <View>
                    <Text style={Styles.heading}>City</Text>
                    { isEdit?
                    <RNPickerSelect
                        onValueChange={(value) =>{
                             setCity(value)
                             handleClick() 
                               
                        }}
                        items={pickerListCity}
                    />
                    : <Text style={Styles.details}>{city}</Text>
                    }
                </View>
            </View>


            <View style={Styles.row}>
                <View>
                    <Text style={Styles.heading}>Address</Text>
                    {
                        isEdit?
                        <TextInput
                            value={address}
                            onChangeText={(item)=>setAddress(item)}
                            style={Styles.editField}
                        />
                        :
                        <Text style={Styles.details}>{address}</Text>
                    }
                </View>
            </View>

            {
                isEdit?
                <>
                <Button
                title="Submit"
                btnStyle={Styles.btn}
                btnTextStyle={Styles.btnText}
                onPress={()=>handleAddressUpdate()}
                />
                <TouchableOpacity onPress={()=>setIsEdit(false)} style={Styles.cancelView}>
                <Text style={Styles.cancelText}>Cancel</Text>
                </TouchableOpacity>
                </>
                :
                <Button
                title="Edit"
                btnStyle={Styles.btn}
                btnTextStyle={Styles.btnText}
                onPress={()=>setIsEdit(true)}
                />
            }
        </View>
    )
}

const mapStateToProps=props=>{
    return{
        msg:props.update.msg,
        isLoading:props.update.isLoading,
        needy:props.needy.needyProfile,
        donor:props.donor.donorProfile
    }
}

export default connect(mapStateToProps,{UpdateAddress})(Address)

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
    },
    btn:{
        backgroundColor:COLORS.red1,
        borderRadius:wp(1),
        marginTop:hp(7)
    },
    btnText:{
        fontSize:16
    },
    cancelView:{
        marginHorizontal:wp(0),
        marginTop:hp(1),
        borderWidth:1,
        borderColor:COLORS.red1,
        width:wp(92),
        height:hp(6),
        borderRadius:wp(1)
    },
    cancelText:{
        fontSize:15,
        textAlign:'center',
        marginTop:hp(1.4)
    }
})