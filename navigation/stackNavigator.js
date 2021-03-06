import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";

//import screen
import ScreenDevelopment from "../screen/development/development";
import {
  Home,
  Chat,
  Feed,
  Keranjang,
  Login,
  Order,
  Pembayaran,
  Profile,
  Tagihan,
  Register,
  RegisterSuccess,
  Splash,
  SearchFeed,
} from "../screen";

//Colors
import Colors from "../colors/colors";
import { RFPercentage } from "react-native-responsive-fontsize";
import bottomNav from "./bottomNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Stack = createStackNavigator();

class stackNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }

  Navigator = () => {
    // AsyncStorage.removeItem("user");
    return (
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Development"
          options={{}}
          component={ScreenDevelopment}
        />
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="BottomNav"
          component={bottomNav}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Order"
          options={{
            headerStyle: {
              backgroundColor: Colors.ColorPrimary(),
            },
            headerTitleStyle: {
              color: Colors.ColorWhite(),
            },
          }}
          component={Order}
        />

        <Stack.Screen
          name="Pembayaran"
          options={{
            headerStyle: {
              backgroundColor: Colors.ColorPrimary(),
            },
            headerTitleStyle: {
              color: Colors.ColorWhite(),
            },
          }}
          component={Pembayaran}
        />
         <Stack.Screen
         options={{
           headerShown:false
         }}
          name="SearchFeed"
              component={SearchFeed}
        />

        <Stack.Screen
          name="Tagihan"
          options={{
            headerStyle: {
              backgroundColor: Colors.ColorPrimary(),
            },
            headerTitleStyle: {
              color: Colors.ColorWhite(),
            },
          }}
          component={Tagihan}
        />

        <Stack.Screen
          name="Keranjang"
          options={{
            headerStyle: {
              backgroundColor: Colors.ColorPrimary(),
            },
            headerTitleStyle: {
              color: Colors.ColorWhite(),
            },
          }}
          component={Keranjang}
        />

        <Stack.Screen
          name="Login"
          options={{
            headerShown: null,
          }}
          component={Login}
        />

        <Stack.Screen
          name="Register"
          options={{
            headerShown: null,
            headerTitleStyle: Style.HeaderBiruTitleNavigation,
            title: null,
          }}
          component={Register}
        />

        <Stack.Screen
          name="RegisterSuccess"
          options={{
            headerShown: null,
            headerTitleStyle: Style.HeaderBiruTitleNavigation,
            title: null,
          }}
          component={RegisterSuccess}
        />

        <Stack.Screen
          name="Chat"
          options={{
            headerStyle: {
              backgroundColor: Colors.ColorPrimary(),
            },
            headerTitleStyle: {
              color: Colors.ColorWhite(),
            },
          }}
          component={Chat}
        />
      </Stack.Navigator>
    );
  };
}

const Style = StyleSheet.create({
  HeaderBiruNavigation: {
    backgroundColor: Colors.ColorPrimary(),
    elevation: 0,
  },
  HeaderBiruTitleNavigation: {
    color: "white",
    fontSize: RFPercentage(2.9),
  },
});

const Nav = new stackNavigator();
export default Nav;
