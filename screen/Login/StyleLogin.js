import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

//Colors
import colors from "../../colors/colors";
import { RFPercentage } from "react-native-responsive-fontsize";

const Style = StyleSheet.create({
  KeyboardAware: {
    backgroundColor: colors.ColorPrimary(),
  },
  //ContainerLogin
  LoginViewContainer: {
    flex: 1,
    marginTop: RFPercentage(8),
    justifyContent: "center",
  },

  //Image
  LoginImageGoogleContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: RFPercentage(2),
    justifyContent: "center",
  },
  LoginImageGoogle: {
    flex: 1,
    height: RFPercentage(12),
    width: RFPercentage(12),
    resizeMode: "contain",
    alignSelf: "center",
  },

  //Form
  LoginFormContainer: {
    marginHorizontal: RFPercentage(4),
    marginVertical: RFPercentage(2.5),
    backgroundColor: colors.ColorWhite(),
    flex: 1,
    borderRadius: 15,
    padding: RFPercentage(2.5),
  },
  LoginFormTextTitle: {
    fontSize: RFPercentage(3),
    color: colors.ColorPrimary(),
    marginBottom: RFPercentage(1.5),
  },
  LoginFormTextInput: {
    backgroundColor: colors.ColorBackground(),
    height: RFPercentage(7.5),
    width: "100%",
    borderRadius: 10,
    paddingLeft: RFPercentage(2),
    paddingRight: RFPercentage(2),
    fontSize: RFPercentage(2.5),
    color: colors.ColorBlack(),
  },

  //text
  LoginTextLupaPassword: {
    fontSize: RFPercentage(2.5),
    color: colors.ColorSecondary(),
    fontWeight: "400",
  },
  LoginTextAtau: {
    textAlign: "center",
    marginTop: 15,
    fontSize: RFPercentage(2.5),
    color: colors.ColorBlack(),
  },
  LoginTextBelumPunyaAkun: {
    fontSize: RFPercentage(2.5),
    color: colors.ColorWhite(),
  },
  LoginTextDaftar: {
    marginLeft: RFPercentage(1),
    color: colors.ColorWhite(),
    fontSize: RFPercentage(2.5),
    textDecorationLine: "underline",
    textDecorationColor: colors.ColorWhite(),
    textShadowOffset: { width: 2, height: 5 },
  },
});

export default Style;
