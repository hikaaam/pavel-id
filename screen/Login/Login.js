import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import * as firebase from 'firebase';
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
import ButtonMasukFacebook from '../../components/ButtonMasukFacebook';
import colors from "../../colors/colors";
import Back from "../../components/backToDevelopment";

//import style
import s from "./StyleLogin";

//import Setting
import url from "../../setting/link";

import db from "../../database/DB";
// todo : pasang fonts


import * as Facebook from 'expo-facebook';
import *  as GoogleSignIn from 'expo-google-sign-in';
const provider = new firebase.auth.GoogleAuthProvider();
async function loginWithFacebook() {
  await Facebook.initializeAsync('425356802026134');

  const { type, token } = await Facebook.logInWithReadPermissionsAsync({
    permissions: ['public_profile'],
  });

  if (type === 'success') {
    // Build Firebase credential with the Facebook access token.
    const credential = firebase.auth.FacebookAuthProvider.credential(token);

    // Sign in with credential from the Facebook user.
    firebase
      .auth()
      .signInWithCredential(credential)
      .catch(error => {
        // Handle Errors here.
      });
  }
}
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      user: null
    };
  }
  async componentDidMount() {
    this.initAsync();
  }
    render() {
      return (
        <KeyboardAwareScrollView style={s.KeyboardAware}>
          <View style={s.LoginViewContainer}>
            {/* Logo aplikasi */}
            <View style={s.LoginImageGoogleContainer}>
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
                <Text style={s.LoginFormTextTitle}>Email</Text>
                <View>
                  <TextInput
                    placeholder="Email"
                    textContentType="emailAddress"
                    autoCapitalize="none"
                    maxLength={255}
                    returnKeyType={"next"}
                    onChangeText={(txt) => {
                      this.setState({ email: txt });
                    }}
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
                <Text style={s.LoginFormTextTitle}>Password</Text>
                <View>
                  <TextInput
                    placeholder="Password"
                    textContentType="password"
                    secureTextEntry={true}
                    maxLength={40}
                    ref={(input) => {
                      this.Password = input;
                    }}
                    onChangeText={(txt) => {
                      this.setState({ password: txt });
                    }}
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
                <Text style={s.LoginTextLupaPassword}>Lupa password?</Text>
              </TouchableOpacity>
              {/* btn masuk */}
              {ButtonBiru.Btn("MASUK", 30, () => {
                // this.login()
                this.props.navigation.replace("BottomNav");
              })}
              <Text style={s.LoginTextAtau}>Atau</Text>
              {/* btn masuk dengan google */}
              <ButtonMasukGoogle
                marginTop={15}
                onPress={() => {
                  this.onPress()
                }}
              />
              <ButtonMasukFacebook
                marginTop={15}
                onPress={async () => {
                 loginWithFacebook()
                }}
              />
            </View>
            {/* daftar */}

            <View
              style={{ flexDirection: "row", flex: 1, justifyContent: "center" }}
            >
              <Text style={s.LoginTextBelumPunyaAkun}>Belum punya akun?</Text>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("Register");
                }}
              >
                <Text style={s.LoginTextDaftar}>Daftar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      );
    }
    login() {
      let email = this.state.email;
      let password = this.state.password;
      console.log(url.link() + "user");
      fetch(url.link() + "user", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.status == "ok") {
            db.createData("user", response.data[0]);
            this.props.navigation.replace("BottomNav");
            // return(Alert.alert("Berhasil",response.data[0].nama))
          } else {
            return Alert.alert("Gagal", response.msg);
          }
          // console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    initAsync = async () => {
      await GoogleSignIn.initAsync({
        // You may ommit the clientId when the firebase `googleServicesFile` is configured
        clientId: '543017744396-u6cilh79a019qbaomlokvf64032ha4rh.apps.googleusercontent.com',
      });
      this._syncUserWithStateAsync();
    };
  
    _syncUserWithStateAsync = async () => {
      const user = await GoogleSignIn.signInSilentlyAsync();
      this.setState({ user });
    };
  
    signOutAsync = async () => {
      await GoogleSignIn.signOutAsync();
      this.setState({ user: null });
    };
  
    signInAsync = async () => {
      try {
        await GoogleSignIn.askForPlayServicesAsync();
        const { type, user } = await GoogleSignIn.signInAsync();
        if (type === 'success') {
          this._syncUserWithStateAsync();
        }
      } catch ({ message }) {
        alert('login: Error:' + message);
      }
    };
  
    onPress = () => {
      if (this.state.user) {
        this.signOutAsync();
      } else {
        this.signInAsync();
      }
    };
  }

  export default Login;
