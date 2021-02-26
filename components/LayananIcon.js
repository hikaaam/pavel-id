import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import colors from "../colors/colors";

const LayananIcon = ({ IconName, text, onPress }) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
        activeOpacity={0.5}
        onPress={onPress}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: RFPercentage(10),
            height: RFPercentage(10),
            borderRadius: 100,
            backgroundColor: colors.ColorBackground(),
          }}
        >
          <Image
            source={IconName}
            style={{ width: "100%", height: "100%", resizeMode: "cover" }}
          />
        </View>
        <View
          style={{
            width: RFPercentage(12),
            justifyContent: "center",
            alignItems: "center",
            top: RFPercentage(0.7),
          }}
        >
          <Text
            style={{
              fontWeight: "normal",
              fontSize: RFPercentage(2),
              color: colors.ColorGraySecondary(),
              textAlign: "center",
            }}
          >
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default LayananIcon;
