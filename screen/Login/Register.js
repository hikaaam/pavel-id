import React, { Component } from "react";
import { View, Text } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

//Components
import Header from "../../components/header";
import Back from "../../components/backToDevelopment";
import ButtonBiru from "../../components/ButtonBiru";

//color
import colors from "../../colors/colors";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <KeyboardAwareScrollView
        style={{ backgroundColor: colors.ColorBackground() }}
      >
        <View style={{ flex: 1 }}>
          <Header />
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: RFPercentage(3.5),
                fontWeight: "600",
                color: colors.ColorWhite(),
              }}
            >
              Daftar Akun Baru
            </Text>
            <Text
              style={{
                marginTop: 12,
                textAlign: "center",
                fontSize: RFPercentage(2.2),
                fontWeight: "600",
                color: colors.ColorWhite(),
                width: "75%",
              }}
            >
              Silahkan lengkapi form dibawah ini untuk membuat akun baru
            </Text>
          </View>
          {/* {CardViewPromo.Promo("kielinkfoto","Test",true,()=>{})} */}
          {/* {ButtonBiru.Btn("MASUK",()=>{})} */}
          <Back />
          <View
            style={{
              backgroundColor: colors.ColorWhite(),
              height: 200,
              borderRadius: 12,
              marginHorizontal: RFPercentage(4),
            }}
          ></View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default Register;
