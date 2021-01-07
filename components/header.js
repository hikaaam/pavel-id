import React, { Component, useState } from 'react';
import { View, Text } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

//Colors
import colors from '../colors/colors';

const header = ()=>{
    return(
        <View style={{
            width:"100%",
            height:RFPercentage(20),
            backgroundColor:colors.ColorPrimary(),
            borderBottomRightRadius:70,
            borderBottomLeftRadius:20,
            position:'absolute'
        }}>
            
        </View>
    )
}

export default header;
