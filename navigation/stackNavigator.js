import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";

//import screen
import ScreenHome from "../screen/home/home/";
import ScreenKeranjang from "../screen/keranjang/keranjang";
import ScreenOrder from "../screen/order/order";
import ScreenProfile from "../screen/profile/profile";
import ScreenFeed from "../screen/feed/feed";
import ScreenDevelopment from "../screen/development/development";
import ScreenLogin from "../screen/Login/Login";
import ScreenRegister from "../screen/Login/Register";

//Colors
import Colors from "../colors/colors";
import { RFPercentage } from "react-native-responsive-fontsize";

const Stack = createStackNavigator();

class stackNavigator {
  Navigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Development"
          options={{}}
          component={ScreenDevelopment}
        />

        <Stack.Screen
          name="Home"
          options={{
            headerShown: null,
            headerTitleStyle: Style.HeaderBiruTitleNavigation,
            title: "Pavel Clean",
            headerRight: () => {
              return (
                <TouchableOpacity
                  style={{
                    width: RFPercentage(8),
                    // justifyContent:'flex-end',
                    alignItems: "flex-end",
                  }}
                  onPress={() => {
                    alert("Cart");
                  }}
                >
                  <View
                    style={{
                      height: RFPercentage(5),
                      width: RFPercentage(5),
                      marginRight: RFPercentage(2),
                      backgroundColor: Colors.ColorWhite(),
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 100,
                    }}
                  >
                    <Ionicons name="ios-cart-outline" size={RFPercentage(4)} />
                  </View>
                  <View
                    style={{
                      position: "absolute",
                      top: RFPercentage(2.7),
                      left: 0,
                      backgroundColor: Colors.ColorRed(),
                      width: RFPercentage(3.5),
                      height: RFPercentage(3.5),
                      borderRadius: 100,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: RFPercentage(2.5),
                        fontWeight: "bold",
                        color: Colors.ColorWhite(),
                      }}
                    >
                      1
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            },
          }}
          component={ScreenHome}
        />

        <Stack.Screen name="Order" options={{}} component={ScreenOrder} />

        <Stack.Screen
          name="Keranjang"
          options={{}}
          component={ScreenKeranjang}
        />

        <Stack.Screen name="Profile" options={{}} component={ScreenProfile} />

        <Stack.Screen name="Feed" options={{}} component={ScreenFeed} />

        <Stack.Screen
          name="Login"
          options={{
            headerShown: null,
          }}
          component={ScreenLogin}
        />

        <Stack.Screen
          name="Register"
          options={{
            headerShown: null,
            headerTitleStyle: Style.HeaderBiruTitleNavigation,
            title: null,
          }}
          component={ScreenRegister}
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
