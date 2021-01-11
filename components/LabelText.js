import React from "react";
import { View, Text } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
//color
import colors from "../colors/colors";

const LabelText = (props) => {
  const { text, fontWeight, color } = props;

  return (
    <View>
      <Text
        style={{
          color: color == null ? colors.ColorBlack() : color,
          fontSize: RFPercentage(2.2),
          fontWeight: fontWeight,
          marginBottom: RFPercentage(1),
        }}
      >
        {text}
      </Text>
    </View>
  );
};

export default LabelText;
