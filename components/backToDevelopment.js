import React, { Component } from 'react';
import { View, Text,TouchableOpacity  } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { useNavigation } from '@react-navigation/native';

const backToDevelopment = ()=>{
    const nav = useNavigation();
    return(
        <TouchableOpacity style={{
            backgroundColor:"black",
            width:RFPercentage(5),
            height:RFPercentage(5),
            justifyContent:'center',
            alignItems:'center',
            borderRadius:100,
            position:'absolute',
            right:1,
            marginRight:RFPercentage(2),

        }} onPress={()=>{
            nav.replace('Development')
        }}>
            <FontAwesome5 name="chevron-left" color="lime" size={RFPercentage(2)}  />
            <Text style={{color:"lime",fontSize:RFPercentage(1)}}>Dev</Text>
        </TouchableOpacity>
    )
}

export default backToDevelopment;
