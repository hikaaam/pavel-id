import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFPercentage } from "react-native-responsive-fontsize";
//color
import colors from "../colors/colors";

const ButtonGunakanPromo = (props) => {
  const { onPress, flex } = props;

  return (
    <TouchableOpacity
      style={{
        flex: 1,
        width: "100%",
        height: RFPercentage(8.5),
        backgroundColor: colors.ColorWhite(),
        justifyContent: "center",
        borderWidth: 1,
        borderColor: colors.ColorSecondary(),
        borderRadius: 10,
        elevation: 5,
        marginBottom: RFPercentage(2),
      }}
      onPress={() => {
        alert("buka modal pilih promo yg tersedia");
      }}
    >
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: RFPercentage(2),
          alignItems: "center",
        }}
      >
        <Ionicons name="pricetags-outline" size={20} />
        <Text
          style={{
            fontSize: RFPercentage(2.5),
            color: colors.ColorPrimary(),
            left: RFPercentage(1),
            flex: 1,
          }}
        >
          Gunakan Promo
        </Text>
        <Ionicons
          name="caret-forward-outline"
          color={colors.ColorSecondary()}
          size={RFPercentage(5)}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ButtonGunakanPromo;
