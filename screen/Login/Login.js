import React, { Component } from "react";
import { AppLoading } from "expo";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  Stylesheet,
  KeyboardAvoidingView,
} from "react-native";

import {
  useFonts,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ButtonBiru from "../../components/ButtonBiru";
import ButtonMasukGoogle from "../../components/ButtonMasukGoogle";
import { RFPercentage } from "react-native-responsive-fontsize";
import colors from "../../colors/colors";

// todo : pasang fonts

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <KeyboardAwareScrollView
        style={{ backgroundColor: colors.ColorPrimary() }}
      >
        <View
          style={{
            flex: 1,
            marginTop: 80,
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 20,
            }}
          >
            <View
              style={{
                height: 100,
                width: 100,
              }}
            >
              <Image
                style={{
                  flex: 1,
                  height: undefined,
                  width: undefined,
                  resizeMode: "contain",
                }}
                source={require("../../assets/icons/ic_google.png")}
              />
            </View>
          </View>
          {/* form */}

          <View
            style={{
              marginHorizontal: RFPercentage(4),
              marginTop: 20,
              marginBottom: 20,
              backgroundColor: colors.ColorWhite(),
              flex: 1,
              borderRadius: 15,
              padding: 20,
            }}
          >
            {/* email */}
            <View style={{ marginBottom: 15 }}>
              <Text
                style={{
                  fontSize: RFPercentage(3),
                  color: colors.ColorPrimary(),
                  marginBottom: 8,
                }}
              >
                Email
              </Text>
              <View>
                <TextInput
                  placeholder="Email"
                  textContentType="emailAddress"
                  autoCapitalize="none"
                  style={{
                    backgroundColor: colors.ColorBackground(),
                    height: RFPercentage(7.5),
                    width: "100%",
                    borderRadius: 10,
                    paddingLeft: RFPercentage(3),
                    paddingRight: RFPercentage(1),
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
                  marginBottom: 8,
                }}
              >
                Password
              </Text>
              <View>
                <TextInput
                  placeholder="Password"
                  textContentType="password"
                  secureTextEntry={true}
                  style={{
                    backgroundColor: colors.ColorBackground(),
                    height: RFPercentage(7.5),
                    width: "100%",
                    borderRadius: 10,
                    paddingLeft: RFPercentage(3),
                    fontSize: RFPercentage(2.5),
                    color: colors.ColorBlack(),
                  }}
                />
              </View>
            </View>
            {/* forget password */}
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: RFPercentage(2.5),
                  color: colors.ColorSecondary(),
                  fontWeight: "400",
                }}
              >
                Lupa password?
              </Text>
            </TouchableOpacity>
            {/* btn masuk */}
            {ButtonBiru.Btn("MASUK", () => {})}
            <Text
              style={{
                textAlign: "center",
                marginTop: 15,
                fontSize: RFPercentage(2.5),
                color: colors.ColorBlack(),
              }}
            >
              Atau
            </Text>
            {/* btn masuk dengan google */}
            <ButtonMasukGoogle
              marginTop={15}
              onPress={() => {
                Alert.alert("masuk");
              }}
            />
          </View>
          {/* daftar */}
          <View
            style={{
              height: RFPercentage(7),
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row", flex: 1 }}>
              <Text
                style={{
                  fontSize: RFPercentage(2.5),
                  color: colors.ColorWhite(),
                }}
              >
                Belum punya akun?
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    left: 5,
                    color: colors.ColorWhite(),
                    fontSize: RFPercentage(2.5),
                  }}
                >
                  Daftar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default Login;
