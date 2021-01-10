import React from "react";
import { View, Text } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
//color
import colors from "../colors/colors";

const LabelText = (props) => {
  const { text, fontWeight } = props;

  return (
    <View>
      <Text
        style={{
          color: colors.ColorBlack(),
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
