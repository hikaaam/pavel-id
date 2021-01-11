import React from "react";
import { View, Text, Image } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//components
import LabelText from "../components/LabelText";

//color
import colors from "../colors/colors";

const DetailRekening = (props) => {
  const { rekening } = props;
  const data = {
    bri: {
      bank: "Bank BRI",
      rekening: "013xxx xxxx xxxx xxxx",
      atasNama: "Qodim Ibnu Salam",
      uri: require("../assets/icons/bri.png"),
    },
    bca: {
      bank: "Bank BCA",
      rekening: "013xxx xxxx xxxx xxxx",
      atasNama: "Ilyas Abdurahman Yusuf",
      uri: require("../assets/icons/bca.png"),
    },
    mandiri: {
      bank: "Bank mandiri",
      rekening: "013xxx xxxx xxxx xxxx",
      atasNama: "Ilyas Abdurahman Yusuf",
      uri: require("../assets/icons/mandiri.png"),
    },
  };

  let bankName;
  let noRekening;
  let atasNama;
  let imgSource;

  switch (rekening) {
    case "bri":
      bankName = data.bri.bank;
      noRekening = data.bri.rekening;
      atasNama = data.bri.atasNama;
      imgSource = data.bri.uri;
      break;

    case "bca":
      bankName = data.bca.bank;
      noRekening = data.bca.rekening;
      atasNama = data.bca.atasNama;
      imgSource = data.bca.uri;
      break;

    case "mandiri":
      bankName = data.mandiri.bank;
      noRekening = data.mandiri.rekening;
      atasNama = data.mandiri.atasNama;
      imgSource = data.mandiri.uri;
      break;

    default:
      Alert.alert("Rekening Yang Anda Pilih Salah");
  }

  return (
    <View>
      <LabelText text="Untuk melanjutkan order silahkan transfer pada rekening berikut :" />
      <View
        style={{
          flexDirection: "row",
          borderBottomWidth: 1,
          borderColor: colors.ColorGrayFade(),
          paddingBottom: RFPercentage(2),
          alignItems: "center",
        }}
      >
        <View style={{ height: RFPercentage(10), width: RFPercentage(20) }}>
          <Image
            source={imgSource}
            style={{
              resizeMode: "contain",
              height: undefined,
              width: undefined,
              flex: 1,
            }}
          />
        </View>
        <View style={{ justifyContent: "center" }}>
          <Text
            style={{ fontSize: RFPercentage(4), color: colors.ColorBlack() }}
          >
            {bankName}
          </Text>
          <Text
            style={{ fontSize: RFPercentage(2.5), color: colors.ColorBlack() }}
          >
            {noRekening}
          </Text>
          <Text
            style={{ fontSize: RFPercentage(2.5), color: colors.ColorBlack() }}
          >
            {atasNama}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DetailRekening;
