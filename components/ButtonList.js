import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RFPercentage } from "react-native-responsive-fontsize";
import Icon from "./Icon";
import Colors from "../colors/colors";

const ButtonList = ({ title, iconName, onPress, isTitleBold }) => {
  return (
    <TouchableOpacity
      style={{
        width: "100%",
        flexDirection: "row",
        marginTop: RFPercentage(1.5),
      }}
      activeOpacity={0.4}
      onPress={() => {
        onPress();
      }}
    >
      <View
        style={{
          borderColor: "#808080aa",
          borderWidth: 0.2,
          paddingVertical: RFPercentage(1.8),
          borderRadius: 20,
          width: "100%",
          alignItems: "center",
          marginRight: RFPercentage(3),
          flexDirection: "row",
          paddingHorizontal: RFPercentage(2),
          justifyContent: "flex-start",
        }}
      >
        <Icon
          name={iconName}
          size={RFPercentage(2.8)}
          color={Colors.ColorBlack()}
        />
        <Text
          style={{
            color: Colors.ColorBlack(),
            fontSize: RFPercentage(2),
            marginLeft: RFPercentage(2),
            fontWeight: isTitleBold ? "bold" : "500",
          }}
        >
          {title}
        </Text>
        <View
          style={{
            flex: 1,
          }}
        >
          <Icon
            name="chevron-forward"
            size={RFPercentage(3)}
            color={Colors.ColorBlack()}
            style={{
              alignSelf: "flex-end",
            }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonList;
