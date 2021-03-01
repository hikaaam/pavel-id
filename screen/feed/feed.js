import React, { Component } from "react";
import { TouchableOpacit, StatusBar } from "react-native";
import { View, Text } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import {StatusBar} from 'expo-status-bar';
import Back from "../../components/backToDevelopment";
import Header from "../../components/header";
import Colors from "../../colors/colors";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import Promo from "../../components/CardViewPromo";

class feed extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Text>Belum Ada Screen</Text>
      </View>
    );
  }
}

export default feed;
