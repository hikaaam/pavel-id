import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//Colors
import colors from "../colors/colors";

class ButtonBiru extends Component {
  Btn(msg, marginTopSize, funct) {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          width: "100%",
          marginTop: marginTopSize,
          height: RFPercentage(8.5),
          backgroundColor: colors.ColorSecondary(),
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 1,
          borderColor: colors.ColorBorder(),
          borderRadius: 10,
          elevation: 10,
        }}
        activeOpacity={0.5}
        onPress={() => {
          funct();
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: RFPercentage(2.5),
            fontWeight: "bold",
          }}
        >
          {msg}
        </Text>
      </TouchableOpacity>
    );
  }
}
const btn = new ButtonBiru();
export default btn;
