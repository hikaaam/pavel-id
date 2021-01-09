import React from "react";
import { View, Text } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
//color
import colors from "../colors/colors";

const CustomLabelInput = (props) => {
  const { text } = props;

  return (
    <View>
      <Text
        style={{
          fontWeight: "normal",
          color: colors.ColorBlack(),
          fontSize: RFPercentage(2.2),
          fontWeight: "600",
          marginBottom: RFPercentage(1),
        }}
      >
        {text}
      </Text>
    </View>
  );
};

export default CustomLabelInput;
