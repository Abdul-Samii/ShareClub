import React,{useState,useEffect} from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import { TextInput } from 'react-native-paper'
import { FormInput, Header } from '../../../../components'
import { COLORS, hp, ICONS, wp } from '../../../../constants'
import RNPickerSelect from 'react-native-picker-select'
import { Button } from '../../../../components/form'
import {launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import { TouchableOpacity } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-community/async-storage'
import { connect } from 'react-redux'
import { AddNewDonation, GetAllCategories } from '../../../../store/actions'


const AddDonation=(props)=>{


    const [Title,setTitle]=useState("")
    const [Desc,setDesc]=useState("")
    const [Phone,setPhone]=useState()
    const [City,setCity]=useState("")
    const [Country,setCountry]=useState("")
    const [Category,setCategory]=useState("")
    const [image,setImage]=useState("");
    const [pickerListCategory,setPickerListCategory]=useState("")
    const pickerListCategor=[
        {label:"Food","value":"Food"},
        {label:"Shoes",value:"Shoes"},
        {label:"Clothes",value:"Clothes"},
    ]


    const setCategoriesList=()=>{
        var myMap = [];
        const cat = props.categories
        cat.map((item,index)=>{
            myMap.push({"label":item.name,"value":item._id,"key":index})
       
    })
    setPickerListCategory(myMap)

    }

console.log("0000000000000 ",pickerListCategory)
    const ImageOpen=(props)=>{
        launchImageLibrary({quality:0.5},(fileobj)=>{
            
            const uploadTask =  storage().ref().child(`/items/${Date.now()}`).putFile(fileobj.assets[0].uri)
                    uploadTask.on('state_changed', 
            (snapshot) => {
                
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                if(progress==100){alert("Uploaded!")}
                
            }, 
            (error) => {
                alert("Something went wrong")
            }, 
            () => {
                
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                setImage(downloadURL)
                
                });
            }
            );
    
         })
        }
      
        const handleAddDonation=async()=>{
            const owner=await AsyncStorage.getItem('userId')
            const obj={
                title:Title,
                description:Desc,
                // images:image,
                phone:Phone,
                city:City,
                country:Country,
                owner,
                category:Category
            }
            await props.AddNewDonation(obj)
            props.navigation.goBack()
        }
        useEffect(()=>{
            handleGetCategory()
            setCategoriesList()
        },[3])
        const handleGetCategory=async()=>{
            await props.GetAllCategories()
        }
    return(
        <View style={Styles.container}>
            <Header title="Add Donation" iconName="arrow-left" Goback={()=>props.navigation.goBack()}/>
            <View style={Styles.top}>
                <Text style={Styles.basicHeading}>Basic details</Text>
                <Text>This section contains the basic details of your donation</Text>
            </View>

            <View>
                <View style={Styles.row}>
                    <Text style={Styles.inputName}>Title *</Text>
                    <TextInput mode='outlined'
                        placeholder='Enter Title...'
                        value={Title}
                        onChangeText={(value)=>setTitle(value)}
                        style={Styles.inputField}
                        blurOnSubmit
                    />
                </View>
                <View style={Styles.row}>
                    <Text style={Styles.inputName}>Description *</Text>
                    <TextInput mode='outlined'
                        placeholder='Enter Description...'
                        value={Desc}
                        onChangeText={(value)=>setDesc(value)}
                        style={Styles.inputField}
                        blurOnSubmit
                    />
                </View>

                <View style={Styles.row}>
                    <Text style={Styles.inputName}>Phone Number *</Text>
                    <TextInput mode='outlined'
                        placeholder='Enter Phone Number...'
                        value={Phone}
                        onChangeText={(value)=>setPhone(value)}
                        keyboardType='numeric'
                        style={Styles.inputField}
                        blurOnSubmit
                    />
                </View>

            {/* City */}
            <View style={{...Styles.City,...Styles.row}} >
                <View>
                    <Text style={Styles.inputName}>City *</Text>
                    <TextInput mode='outlined'
                        placeholder='Enter City...'
                        value={City}
                        onChangeText={(value)=>setCity(value)}
                        style={{...Styles.inputField,width:wp(47)}}
                        blurOnSubmit
                    />
                </View>
                <View>
                    <Text style={Styles.inputName}>Country *</Text>
                    <TextInput mode='outlined'
                        placeholder='Enter Country...'
                        value={Country}
                        onChangeText={(value)=>setCountry(value)}
                        style={{...Styles.inputField,width:wp(47),marginLeft:wp(1)}}
                        blurOnSubmit
                    />
                </View>
            </View>

            {/* CATEGORY */}
            <View style={Styles.row}>
                <Text style={Styles.inputName}>Category *</Text>
                <View style={Styles.categoryInput}>
                    <RNPickerSelect
                    onValueChange={(value) => setCategory(value)}
                    items={pickerListCategory}
                    
                    />
            </View>
            </View>
            {/* UPLOAD IMAGE */}
            <TouchableOpacity style={{...Styles.uploadView,...Styles.row}} onPress={()=>ImageOpen()}>
                <ICONS.Ionicons name="md-image" size={20} color={COLORS.red1} style={Styles.iconImg}/>
                <Text style={Styles.upload}>Upload Image</Text>
            </TouchableOpacity>

        <Button
            btnStyle={Styles.btn}
            btnTextStyle={Styles.btnText}
            title="Submit"
            onPress={()=>handleAddDonation()}
        />
            </View>
        </View>
    )
}
const mapStateToProps=props=>{
    return{
        msg:props.donor.msg,
        categories:props.donor.categories
    }
}
export default connect(mapStateToProps,{AddNewDonation,GetAllCategories})(AddDonation)

const Styles = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:wp(2)
    },
    top:{
        marginTop:hp(4)
    },
    basicHeading:{
        fontSize:22,
        fontWeight:'bold',
        color:COLORS.red1
    },
    inputName:{
        color:COLORS.red1,
        fontSize:16
    },
    inputField:{
        height:hp(6),
        
    },
    City:{
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    uploadView:{
        flexDirection:'row',
        marginLeft:wp(1),
        marginTop:hp(2)
    },
    upload:{
        color:COLORS.red1,
        fontSize:16,
        marginTop:hp(2),
        marginLeft:wp(1)
    },
    iconImg:{
        marginTop:hp(2)
    },
    categoryInput:{
        borderColor:COLORS.gray3,
        borderWidth:1 ,
        height:hp(6)       
    },
    btn:{
        backgroundColor:COLORS.red1,
        height:hp(6),
        marginTop:hp(6)
    },
    btnText:{
        fontSize:16
    },
    row:{
        marginTop:hp(2)
    }
})