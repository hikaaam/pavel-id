import React, { Component } from "react";
import { StyleSheet } from "react-native";
import Colors from "../colors/colors";
import { BottomNavigation } from "react-native-paper";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Home, Profile, Feed, OrderList } from "../screen";
import { RFPercentage } from "react-native-responsive-fontsize";

const Tab = createMaterialBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor={Colors.ColorGrayFade()}
      barStyle={{ backgroundColor: Colors.ColorPrimary() }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: null,
          headerTitleStyle: Style.HeaderBiruTitleNavigation,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
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
      />

      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="newspaper-variant" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="OrderList"
        component={Feed}
        options={{
          title: "Orders",
          tabBarIcon: ({ color }) => (
            <Icon name="clipboard-text-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
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

export default MyTabs;
