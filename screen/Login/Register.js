import React, { Component } from "react";
import { StatusBar } from "expo";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";
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
    this.state = {
      nama: "",
      email: "",
      password: "",
      passwordUlang: "",
    };
  }

  render() {
    return (
      <KeyboardAwareScrollView
        style={{ backgroundColor: colors.ColorBackground() }}
      >
        <View style={{ flex: 1, paddingTop: RFPercentage(6.5) }}>
          <Header />
          {/* tulisan header */}
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
                marginTop: RFPercentage(2),
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

          {/* form */}
          <View
            style={{
              backgroundColor: colors.ColorWhite(),
              borderRadius: 12,
              marginHorizontal: RFPercentage(4),
              marginTop: RFPercentage(2),
              padding: RFPercentage(4),
            }}
          >
            <Back />
            {/* Nama */}
            <View style={{ marginBottom: RFPercentage(2.2) }}>
              <Text
                style={{
                  fontSize: RFPercentage(3),
                  color: colors.ColorPrimary(),
                  marginBottom: RFPercentage(1.2),
                }}
              >
                Nama
              </Text>
              <View>
                <TextInput
                  placeholder="Nama"
                  // selectionColor="#cccc"
                  textContentType="name"
                  autoCapitalize="none"
                  maxLength={255}
                  returnKeyType={"next"}
                  onChangeText={(txt) => {
                    this.setState({ nama: txt });
                  }}
                  blurOnSubmit={false}
                  onSubmitEditing={() => {
                    this.Email.focus();
                  }}
                  style={{
                    backgroundColor: colors.ColorBackground(),
                    height: RFPercentage(7.5),
                    width: "100%",
                    borderRadius: 10,
                    paddingLeft: RFPercentage(2),
                    paddingRight: RFPercentage(2),
                    fontSize: RFPercentage(2.5),
                    color: colors.ColorBlack(),
                  }}
                />
              </View>
            </View>
            {/* email */}
            <View style={{ marginBottom: RFPercentage(2.2) }}>
              <Text
                style={{
                  fontSize: RFPercentage(3),
                  color: colors.ColorPrimary(),
                  marginBottom: RFPercentage(1.2),
                }}
              >
                Email
              </Text>
              <View>
                <TextInput
                  placeholder="Email"
                  textContentType="emailAddress"
                  autoCapitalize="none"
                  maxLength={255}
                  returnKeyType={"next"}
                  ref={(input) => {
                    this.Email = input;
                  }}
                  blurOnSubmit={false}
                  onSubmitEditing={() => {
                    this.Password.focus();
                  }}
                  keyboardType="email-address"
                  style={{
                    backgroundColor: colors.ColorBackground(),
                    height: RFPercentage(7.5),
                    width: "100%",
                    borderRadius: 10,
                    paddingLeft: RFPercentage(2),
                    paddingRight: RFPercentage(2),
                    fontSize: RFPercentage(2.5),
                    color: colors.ColorBlack(),
                  }}
                />
              </View>
            </View>
            {/* password */}
            <View style={{ marginBottom: 15 }}>
              <Text
                style={{
                  fontSize: RFPercentage(3),
                  color: colors.ColorPrimary(),
                  marginBottom: RFPercentage(1.2),
                }}
              >
                Password
              </Text>
              <View>
                <TextInput
                  ref={(input) => {
                    this.Password = input;
                  }}
                  placeholder="Password"
                  textContentType="password"
                  returnKeyType={"next"}
                  blurOnSubmit={false}
                  onSubmitEditing={() => {
                    this.PasswordUlang.focus();
                  }}
                  secureTextEntry={true}
                  maxLength={40}
                  style={{
                    backgroundColor: colors.ColorBackground(),
                    height: RFPercentage(7.5),
                    width: "100%",
                    borderRadius: 10,
                    paddingLeft: RFPercentage(2),
                    paddingRight: RFPercentage(2),
                    fontSize: RFPercentage(2.5),
                    color: colors.ColorBlack(),
                  }}
                />
              </View>
            </View>
            {/* password ulang */}
            <View style={{ marginBottom: 15 }}>
              <Text
                style={{
                  fontSize: RFPercentage(3),
                  color: colors.ColorPrimary(),
                  marginBottom: RFPercentage(1.2),
                }}
              >
                Ketikan Ulang Password
              </Text>
              <View>
                <TextInput
                  ref={(input) => {
                    this.PasswordUlang = input;
                  }}
                  placeholder="Ketikan Ulang Password"
                  textContentType="password"
                  secureTextEntry={true}
                  maxLength={40}
                  style={{
                    backgroundColor: colors.ColorBackground(),
                    height: RFPercentage(7.5),
                    width: "100%",
                    borderRadius: 10,
                    paddingLeft: RFPercentage(2),
                    paddingRight: RFPercentage(2),
                    fontSize: RFPercentage(2.5),
                    color: colors.ColorBlack(),
                  }}
                />
              </View>
            </View>
          </View>
          {/* Button */}
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: RFPercentage(4),
              paddingBottom: RFPercentage(3),
            }}
          >
            <View
              style={{
                backgroundColor: colors.ColorWhite(),
                borderRadius: 10,
                borderWidth: 1.5,
                borderColor: colors.ColorSecondary(),
                width: RFPercentage(12),
                height: RFPercentage(8.5),
                marginTop: RFPercentage(3),
                marginRight: RFPercentage(2),
                alignItems: "center",
                justifyContent: "center",
                elevation: 4,
              }}
            >
              <Ionicons
                name="arrow-back-outline"
                size={30}
                color={colors.ColorBlack()}
              />
            </View>
            {ButtonBiru.Btn("DAFTAR", RFPercentage(3), () => {})}
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default Register;
