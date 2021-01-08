import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

import Colors from '../colors/colors';

class CardView {
    Promo(src, text,kiri,funct) {
        return (
            <TouchableOpacity style={{
                width: RFPercentage(25),
                // height: RFPercentage(1),
                // backgroundColor: Colors.ColorSecondary(),
                borderRadius: 10,
                borderColor: Colors.ColorBorder(),
                borderWidth: 0.5,
                marginBottom:RFPercentage(3),
                marginLeft:kiri?RFPercentage(3):0
            }} activeOpacity={0.5} onPress={() => {
                funct()
            }}>
                <ImageBackground source={{ uri: src }} style={{
                    width: RFPercentage(25),
                    height: RFPercentage(12),
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                }}>
                </ImageBackground>
                <View style={{
                    justifyContent:'center',
                    alignItems:'center',
                    paddingVertical:RFPercentage(1),
                }}>
                    <Text style={{
                        color: Colors.ColorBlack(),
                        fontSize:RFPercentage(1.8),
                        fontWeight:"bold"
                    }}>{text}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}
const cv = new CardView();
export default cv;
