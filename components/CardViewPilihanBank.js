import React from "react";
import { View, Text, Image } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
//component
import LabelText from "../components/LabelText";
import TextHarga from "../components/TextHarga";
//color
import colors from "../colors/colors";

const CardViewPilihanBank = (props) => {
  const { image, nama } = props;

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: RFPercentage(5),
        borderBottomWidth: 2,
        borderColor: colors.ColorGrayFade(),
        paddingBottom: RFPercentage(2),
        marginBottom: RFPercentage(2),
      }}
    >
      <View
        style={{
          width: RFPercentage(20),
          height: RFPercentage(10),
        }}
      >
        <Image
          source={image}
          style={{
            flex: 1,
            height: undefined,
            width: undefined,
            resizeMode: "contain",
            borderRadius: 8,
          }}
        />
      </View>
      <Text
        style={{
          left: RFPercentage(2),
          color: colors.ColorBlack(),
          fontSize: RFPercentage(3),
        }}
      >
        {nama}
      </Text>
    </View>
  );
};

export default CardViewPilihanBank;
