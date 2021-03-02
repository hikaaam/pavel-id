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
class feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      search: "Search Feed",
    };
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: Colors.ColorWhite(),
          flex: 1,
        }}
      >
        <StatusBar style="light" backgroundColor={Colors.ColorPrimary()} />
        {this.renderModal()}
        <View
          style={{
            backgroundColor: Colors.ColorPrimary(),
            paddingTop: RFPercentage(5),
            height: RFPercentage(15),
            flexDirection: "row",
            paddingHorizontal: RFPercentage(3),
            width: "100%",
          }}
        >
          {!this.state.visible && (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Text
                style={{
                  color: Colors.ColorWhite(),
                  fontSize: RFPercentage(3),
                }}
              >
                Feed
              </Text>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  width: "80%",
                }}
                activeOpacity={0.6}
                onPress={() => {
                  // this.setState({
                  //   visible: true,
                  // });
                  // setTimeout(() => {
                  //   this.textRef.focus();
                  // }, 200);
                  this.props.navigation.navigate('SearchFeed')
                }}
              >
                <View
                  style={{
                    flex: 1,
                    backgroundColor: Colors.ColorWhite(),
                    paddingVertical: RFPercentage(1),
                    borderRadius: 15,
                    paddingHorizontal: RFPercentage(2),
                    marginRight: RFPercentage(2),
                  }}
                >
                  <Text
                    style={{
                      fontSize: RFPercentage(2),
                      textTransform: "capitalize",
                      color: Colors.ColorBorder(),
                    }}
                  >
                    {this.state.search}
                  </Text>
                </View>

                <Icon
                  name="search"
                  size={RFPercentage(3)}
                  color={Colors.ColorWhite()}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Belum Ada Content</Text>
        </View>
      </View>
    );
  }
  renderModal() {
    return (
      <Modal transparent visible={this.state.visible}>
        <View
          style={{
            flex: 1,
            backgroundColor: Colors.ColorBorder(),
          }}
        >
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
            <TextInput
              ref={(ref) => (this.textRef = ref)}
              style={{
                paddingTop: RFPercentage(1),
                paddingBottom: RFPercentage(2),
                width: "100%",
                backgroundColor: Colors.ColorWhite(),
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                fontSize: RFPercentage(2),
                paddingLeft: RFPercentage(2),
                alignSelf: "flex-end",
                paddingRight: RFPercentage(6),
                borderBottomWidth: 0.3,
                borderColor: Colors.ColorBorder(),
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
            <TouchableOpacity
              style={{
                flex: 1,
                height: RFPercentage(5),
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                right: 0,
                marginRight: RFPercentage(4),
                paddingTop: RFPercentage(3),
              }}
              onPress={() => {
                this.setState({
                  visible: false,
                  search: "Search text",
                });
              }}
            >
              <Icon
                name="close"
                color={Colors.ColorBlack()}
                size={RFPercentage(5)}
              />
            </TouchableOpacity>
          </View>
          <ScrollView>{this.renderSearch(true)}</ScrollView>
        </View>
      </Modal>
    );
  }
  renderSearch(isNull) {
    if (isNull) {
      return (
        <View
          style={{
            height: Dimensions.get("window").height / 1.5,
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
              paddingBottom: RFPercentage(3),
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

export default feed;
