import React from "react";
import { View, Text } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
//component
import LabelText from "../components/LabelText";
import TextHarga from "../components/TextHarga";
//color
import colors from "../colors/colors";

const CardViewPembayaran = (props) => {
  const { ongkir, subtotal, total } = props;

  return (
    <View>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.ColorWhite(),
          paddingLeft: RFPercentage(2),
          paddingTop: RFPercentage(2),
          paddingRight: RFPercentage(2),
          paddingBottom: RFPercentage(0.5),
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          marginTop: RFPercentage(2),
          elevation: 4,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <LabelText text="Biaya Kurir" />
          <TextHarga text={"Rp " + ongkir} color={colors.ColorSecondary()} />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <LabelText text="Subtotal Layanan" />
          <TextHarga text={"Rp " + subtotal} color={colors.ColorSecondary()} />
        </View>
      </View>
      <View
        style={{
          backgroundColor: colors.ColorPrimary(),
          flex: 1,
          padding: RFPercentage(2),
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          elevation: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: RFPercentage(3),
              color: colors.ColorWhite(),
            }}
          >
            Total Pembayaran
          </Text>
          <Text
            style={{
              fontSize: RFPercentage(3),
              color: colors.ColorWhite(),
              fontWeight: "bold",
            }}
          >
            {"Rp " + total}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CardViewPembayaran;
