import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

import Colors from "../colors/colors";

const CardViewPromo = ({ image, text, first, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        marginLeft: first ? 0 : RFPercentage(3),
      }}
      activeOpacity={0.5}
      onPress={onPress}
    >
      <View
        style={{
          width: "100%",
          height: RFPercentage(10),
        }}
      >
        <Image
          source={{ uri: image }}
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
};

export default CardViewPromo;
