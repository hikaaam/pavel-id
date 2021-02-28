import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Image } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

import colors from "../../colors/colors";
import ButtonBiru from "../../components/ButtonBiru";

class RegisterSuccess extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{ flex: 1, alignItems: "center", paddingTop: RFPercentage(20) }}
      >
        <StatusBar style="dark" />
        <View
          style={{
            width: RFPercentage(30),
            height: RFPercentage(30),
          }}
        >
          <Image
            source={require("../../assets/icons/ic_success.png")}
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
          />
        </View>
        <Text
          style={{
            width: "60%",
            fontSize: RFPercentage(5),
            textAlign: "center",
            color: colors.ColorBlack(),
            marginBottom: RFPercentage(2),
          }}
        >
          Sukes Membuat Akun Baru
        </Text>
        <Text
          style={{
            color: colors.ColorBlack(),
            fontSize: RFPercentage(3),
            textAlign: "center",
            width: "75%",
          }}
        >
          Selamat datang di{" "}
          <Text style={{ color: colors.ColorSecondary(), fontWeight: "bold" }}>
            Pavel Clean
          </Text>{" "}
          dan nikmati pelayanan terbaik dari kami
        </Text>
        <View
          style={{
            height: RFPercentage(15),
            width: "90%",
            //   marginHorizontal: RFPercentage(2),
            marginBottom: RFPercentage(2),
          }}
        >
          {ButtonBiru.Btn("MULAI", 30, () => {
            // this.login()
            this.props.navigation.replace("BottomNav");
          })}
        </View>
      </View>
    );
  }
}

export default RegisterSuccess;
