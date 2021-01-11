import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import LabelText from "../components/LabelText";
//color
import colors from "../colors/colors";

const TextHarga = (props) => {
  const { status } = props;
  let statusText;
  let color;

  switch (status) {
    case "menunggu":
      statusText = "Menunggu Pembayaran";
      color = colors.ColorYellow();
      break;
    case "dibatalkan":
      statusText = "Pesanan Dibatalkan";
      color = colors.ColorRed();
      break;
    case "diproses":
      statusText = "Pesanan Sedang Diproses";
      color = colors.ColorGreen();
      break;
    default:
      break;
  }

  return (
    <View>
      <LabelText text="Status Tagihan" grayed={true} />
      <Text
        style={{
          backgroundColor: color,
          borderRadius: 20,
          padding: RFPercentage(1.5),
          textAlign: "center",
          width: "50%",
          color:
            status === "menunggu" ? colors.ColorBlack() : colors.ColorWhite(),
        }}
      >
        {statusText}
      </Text>
    </View>
  );
};

export default TextHarga;
