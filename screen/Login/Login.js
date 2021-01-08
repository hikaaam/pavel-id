import React, { Component } from "react";
import { StatusBar } from "expo";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
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
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RFPercentage } from "react-native-responsive-fontsize";


//components
import ButtonBiru from "../../components/ButtonBiru";
import ButtonMasukGoogle from "../../components/ButtonMasukGoogle";

import colors from "../../colors/colors";
import Back from "../../components/backToDevelopment";

//import style
import s from './StyleLogin';

// todo : pasang fonts

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:"",
      password:""
    };
  }

  render() {
    return (
      <KeyboardAwareScrollView style={s.KeyboardAware}>
        <View style={s.LoginViewContainer}  >

          {/* Logo aplikasi */}
          <View style={s.LoginImageGoogleContainer} >
            <Image
              style={s.LoginImageGoogle}
              source={require("../../assets/icons/ic_google.png")}
            />
          </View>

          {/* form */}

          <View style={s.LoginFormContainer}>
            <Back />
            {/* email */}
            <View style={{ marginBottom: 15 }}>
              <Text style={s.LoginFormTextTitle} >
                Email
              </Text>
              <View>
                <TextInput
                  placeholder="Email"
                  textContentType="emailAddress"
                  autoCapitalize="none"
                  maxLength={255}
                  returnKeyType={"next"}
                  onChangeText={(txt) => { this.setState({ email: txt }) }}
                  onSubmitEditing={() => {
                    this.Password.focus();
                  }}
                  blurOnSubmit={false}
                  style={s.LoginFormTextInput}
                />
              </View>
            </View>
            {/* password */}
            <View style={{ marginBottom: 15 }}>
              <Text style={s.LoginFormTextTitle}>
                Password
              </Text>
              <View>
                <TextInput
                  placeholder="Password"
                  textContentType="password"
                  secureTextEntry={true}
                  maxLength={40}
                  ref={(input) => {
                    this.Password = input;
                  }}
                  onChangeText={(txt) => { this.setState({ password: txt }) }}
                  style={s.LoginFormTextInput}
                />
              </View>
            </View>
            {/* forget password */}
            <TouchableOpacity
              onPress={() => {
                Alert.alert("lupa password");
              }}
            >
              <Text style={s.LoginTextLupaPassword}>
                Lupa password?
              </Text>
            </TouchableOpacity>
            {/* btn masuk */}
            {ButtonBiru.Btn("MASUK", 30, () => {
              Alert.alert("masuk email");
            })}
            <Text style={s.LoginTextAtau} >
              Atau
            </Text>
            {/* btn masuk dengan google */}
            <ButtonMasukGoogle
              marginTop={15}
              onPress={() => {
                Alert.alert("masuk Google");
              }} />
          </View>
          {/* daftar */}

          <View style={{ flexDirection: "row", flex: 1, justifyContent: 'center' }}>
            <Text style={s.LoginTextBelumPunyaAkun}>
              Belum punya akun?
              </Text>
            <TouchableOpacity>
              <Text
                style={s.LoginTextDaftar} >
                Daftar
                </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default Login;
