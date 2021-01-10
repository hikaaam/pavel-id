import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

import Colors from "../colors/colors";

class CardView {
  Promo(src, text, kiri, funct) {
    return (
      <TouchableOpacity
        style={{
          marginLeft: kiri ? RFPercentage(3) : 0,
        }}
        activeOpacity={0.5}
        onPress={() => {
          funct();
        }}
      >
        <View
          style={{
            width: "100%",
            height: RFPercentage(10),
          }}
        >
          <Image
            source={{ uri: src }}
            style={{
              borderRadius: 5,
              height: undefined,
              width: undefined,
              flex: 1,
              resizeMode: "cover",
            }}
          />
        </View>
        <Text
          style={{
            color: Colors.ColorBlack(),
            fontSize: RFPercentage(1.8),
            fontWeight: "bold",
            textAlign: "center",
            flex: 1,
            marginTop: RFPercentage(1),
          }}
        >
          {text}
        </Text>
      </TouchableOpacity>
    );
  }
}
const cv = new CardView();
export default cv;
