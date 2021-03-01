import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { Component } from "react";
import { ActivityIndicator } from "react-native";
import { Text, View } from "react-native";

export class Splash extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  async componentDidMount() {
    const user = await AsyncStorage.getItem("user");
    if (user) {
      this.props.navigation.replace("BottomNav");
    } else {
      this.props.navigation.replace("Login");
    }
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" animating color="blue" />
      </View>
    );
  }
}

export default Splash;
