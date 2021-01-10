import React from "react";
import { View, Text } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
//color
import colors from "../colors/colors";

const TextHarga = (props) => {
  const { text, color } = props;

  return (
    <View>
      <Text
        style={{
          color: color,
          fontSize: RFPercentage(2.5),
          fontWeight: "bold",
        }}
      >
        {text}
      </Text>
    </View>
  );
};

export default TextHarga;
