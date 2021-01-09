import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//color
import colors from "../colors/colors";

const CustomSizeButtonBiru = (props) => {
  const {
    txt,
    width,
    height,
    borderRadius,
    fontSize,
    fontWeight,
    onPress,
  } = props;

  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={{
          padding: RFPercentage(2),
          width: width,
          height: height,
          backgroundColor: colors.ColorSecondary(),
          alignItems: "center",
          justifyContent: "center",
          borderRadius: borderRadius,
          elevation: 4,
        }}
      >
        <Text
          style={{
            color: colors.ColorWhite(),
            fontSize: fontSize,
            fontWeight: fontWeight,
          }}
        >
          {txt}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomSizeButtonBiru;
