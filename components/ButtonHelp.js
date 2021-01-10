import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFPercentage } from "react-native-responsive-fontsize";
//color
import colors from "../colors/colors";

const ButtonHelp = (props) => {
  const { onPress, flex } = props;

  return (
    <View style={{ flex: flex }}>
      <TouchableOpacity style={{ left: RFPercentage(1) }} onPress={onPress}>
        <Ionicons
          name="help-circle-outline"
          size={20}
          color={colors.ColorSecondary()}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ButtonHelp;
