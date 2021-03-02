import React, { Component } from "react";
import { View, Text, Touchable } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { StatusBar } from "expo-status-bar";
import Back from "../../components/backToDevelopment";
import Header from "../../components/Header";
import Colors from "../../colors/colors";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import Promo from "../../components/CardViewPromo";
import Icon from "../../components/Icon";
import { Dimensions } from "react-native";
import { Modal } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export class search extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {
    setTimeout(() => {
      this.textRef.focus()
    }, 200);
  }
  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: Colors.ColorWhite(),
        paddingTop: RFPercentage(4),
      }}>
        <StatusBar backgroundColor={Colors.ColorPrimary()} style="light" />
        <View
          style={{
            backgroundColor: Colors.ColorPrimary(),
            height: RFPercentage(10),
            flexDirection: "row",
            paddingHorizontal: RFPercentage(3),
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{
              width: RFPercentage(5),
              height: RFPercentage(5),
            }}
            onPress={() => {
              this.props.navigation.goBack()
            }}
          >
            <Icon
              name="chevron-back"
              color={Colors.ColorWhite()}
              size={RFPercentage(5)}
            />
          </TouchableOpacity>
          <TextInput
            ref={(ref) => (this.textRef = ref)}
            style={{
              flex: 1,
              marginLeft: RFPercentage(2),
              paddingVertical: RFPercentage(1),
              backgroundColor: Colors.ColorWhite(),
              borderRadius: 15,
              fontSize: RFPercentage(2),
              paddingHorizontal: RFPercentage(2),
            }}
            placeholder="Search Text"
            returnKeyType="search"
            onChangeText={(search) => {
              this.setState({ search });
            }}
            onSubmitEditing={() => {
              alert(this.state.search);
            }}
          />

        </View>
        <KeyboardAwareScrollView>{this.renderSearch(true)}</KeyboardAwareScrollView>
      </View>
    );
  }
  renderSearch(isNull) {
    if (isNull) {
      return (
        <View
          style={{
            height: Dimensions.get("window").height / 1,
            backgroundColor: Colors.ColorWhite(),
            marginHorizontal: RFPercentage(3),
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            position: "relative",
            paddingHorizontal: RFPercentage(2),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon
            name="search-sharp"
            color={Colors.ColorPrimary()}
            size={RFPercentage(15)}
            style={{
              marginBottom: RFPercentage(2),
            }}
          />
          <Text
            style={{
              paddingBottom: RFPercentage(30),
              fontSize: RFPercentage(2.5),
              fontWeight: "bold",
              color: Colors.ColorPrimary(),
            }}
          >
            Tidak Ada History
          </Text>
        </View>
      );
    }
    return (
      <Vew
        style={{
          backgroundColor: Colors.ColorWhite(),
        }}
      >
        <Text>halo</Text>
      </Vew>
    );
  }
}

export default search;
