import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

import Colors from '../colors/colors';

class CardView {
    Promo(src,text,white,funct) {
        return (
            <TouchableOpacity style={{
                width: RFPercentage(25),
                height: RFPercentage(12),
                // backgroundColor: Colors.ColorSecondary(),
                borderRadius: 10,
                borderColor: Colors.ColorBorder(),
                borderWidth:0.5
            }} activeOpacity={0.5} onPress={()=>{
                funct()
            }}>
                <ImageBackground source={{ uri: src }} style={{
                    width: RFPercentage(25),
                    height: RFPercentage(12),
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        marginBottom: RFPercentage(2),
                        color:white?"white":"black"
                    }}>{text}</Text>
                </ImageBackground>
            </TouchableOpacity>
        )
    }
}
const cv = new CardView();
export default cv;
