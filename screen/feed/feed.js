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
          flex: 1,
        }}
      >
        <StatusBar backgroundColor={Colors.ColorPrimary()} />
        <View
          style={{
            justifyContent: "flex-start",
            flexDirection: "row",
            backgroundColor: Colors.ColorPrimary(),
            width: "100%",
            alignItems: "center",
            paddingLeft: RFPercentage(2),
            paddingVertical: RFPercentage(1.2),
          }}
        >
          {/* <TouchableOpacity>
              <Icon name="chevron-left" size={RFPercentage(5)} color={Colors.ColorWhite()}  />
            </TouchableOpacity> */}
          <Text
            style={{
              color: Colors.ColorWhite(),
              fontSize: RFPercentage(2.5),
              fontWeight: "bold",
              marginLeft: RFPercentage(2),
            }}
          >
            Feed
          </Text>
        </View>
        <View
          style={{
            backgroundColor: Colors.ColorPrimary(),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              alignSelf: "flex-end",
              marginRight: RFPercentage(2),
            }}
          >
            <Icon
              name="dots-vertical"
              size={RFPercentage(4)}
              color={Colors.ColorWhite()}
            />
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: Colors.ColorPrimary(),
              borderRadius: 100,
              width: RFPercentage(11),
              height: RFPercentage(11),
              justifyContent: "center",
              alignItems: "center",
              margintop: RFPercentage(1),
            }}
          >
            <Icon
              name="account"
              size={RFPercentage(10)}
              color={Colors.ColorWhite()}
            />
          </View>
          <Text
            style={{
              color: Colors.ColorWhite(),
              fontSize: RFPercentage(2),
              fontWeight: "bold",
              textTransform: "capitalize",
              marginBottom: RFPercentage(8),
            }}
          >
            Ilyas abdurahman yusuf
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            position: "absolute",
            top: RFPercentage(27.5),
            height: "70%",
            backgroundColor: Colors.ColorBackground(),
            borderRadius: 20,
          }}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              flex: 1,
              marginTop: RFPercentage(2),
            }}
          >
            <View
              style={{
                marginTop: RFPercentage(2),
                paddingHorizontal: RFPercentage(2),
              }}
            >
              <Text
                style={{
                  fontSize: RFPercentage(3),
                  fontWeight: "bold",
                  color: Colors.ColorBlack(),
                }}
              >
                Promo Anda
              </Text>
              <Text
                style={{
                  fontSize: RFPercentage(2.2),
                  color: Colors.ColorGraySecondary(),
                  fontWeight: "normal",
                }}
              >
                Nikmati promo dengan harga terbaik
              </Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ marginVertical: RFPercentage(2) }}
              >
                <Promo
                  first
                  image="https://i2.wp.com/etalaseserpong.com/wp-content/uploads/2019/08/090819-ilustrasi-promo.jpg?resize=696%2C502&ssl=1"
                  text="Fast Clean + Unyellowing"
                />
                <Promo
                  image="https://i2.wp.com/etalaseserpong.com/wp-content/uploads/2019/08/090819-ilustrasi-promo.jpg?resize=696%2C502&ssl=1"
                  text="Fast Clean + Unyellowing"
                />
                <Promo
                  image="https://i2.wp.com/etalaseserpong.com/wp-content/uploads/2019/08/090819-ilustrasi-promo.jpg?resize=696%2C502&ssl=1"
                  text="Fast Clean + Unyellowing"
                />
                <Promo
                  image="https://i2.wp.com/etalaseserpong.com/wp-content/uploads/2019/08/090819-ilustrasi-promo.jpg?resize=696%2C502&ssl=1"
                  text="Fast Clean + Unyellowing"
                />
              </ScrollView>
            </View>
            <View
              style={{
                paddingHorizontal: RFPercentage(2),
                margintop: RFPercentage(1),
                marginBottom: RFPercentage(3),
              }}
            >
              <Text
                style={{
                  fontSize: RFPercentage(3),
                  fontWeight: "bold",
                  color: Colors.ColorBlack(),
                }}
              >
                Pengaturan
              </Text>

              <TouchableOpacity
                style={{
                  width: "100%",
                  flexDirection: "row",
                  paddingVertical: RFPercentage(2),
                  marginTop: RFPercentage(2),
                }}
              >
                <View
                  style={{
                    borderColor: "#808080aa",
                    borderWidth: 1,
                    paddingVertical: RFPercentage(1),
                    borderRadius: 20,
                    width: RFPercentage(8),
                    alignItems: "center",
                    marginRight: RFPercentage(3),
                  }}
                >
                  <Icon
                    name="receipt"
                    size={RFPercentage(3)}
                    color={Colors.ColorBlack()}
                  />
                </View>
                <Text
                  style={{
                    color: Colors.ColorBlack(),
                    fontSize: RFPercentage(3.5),
                  }}
                >
                  Pesanan
                </Text>
                <Icon
                  style={{
                    position: "absolute",
                    right: 0,
                    top: RFPercentage(2),
                  }}
                  name="chevron-right"
                  size={RFPercentage(5)}
                  color={Colors.ColorBlack()}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: "100%",
                  flexDirection: "row",
                  paddingVertical: RFPercentage(2),
                  marginTop: RFPercentage(2),
                }}
              >
                <View
                  style={{
                    borderColor: "#808080aa",
                    borderWidth: 1,
                    paddingVertical: RFPercentage(1),
                    borderRadius: 20,
                    width: RFPercentage(8),
                    alignItems: "center",
                    marginRight: RFPercentage(3),
                  }}
                >
                  <Icon
                    name="receipt"
                    size={RFPercentage(3)}
                    color={Colors.ColorBlack()}
                  />
                </View>
                <Text
                  style={{
                    color: Colors.ColorBlack(),
                    fontSize: RFPercentage(3.5),
                  }}
                >
                  Pesanan
                </Text>
                <Icon
                  style={{
                    position: "absolute",
                    right: 0,
                    top: RFPercentage(2),
                  }}
                  name="chevron-right"
                  size={RFPercentage(5)}
                  color={Colors.ColorBlack()}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: "100%",
                  flexDirection: "row",
                  paddingVertical: RFPercentage(2),
                  marginTop: RFPercentage(2),
                }}
              >
                <View
                  style={{
                    borderColor: "#808080aa",
                    borderWidth: 1,
                    paddingVertical: RFPercentage(1),
                    borderRadius: 20,
                    width: RFPercentage(8),
                    alignItems: "center",
                    marginRight: RFPercentage(3),
                  }}
                >
                  <Icon
                    name="receipt"
                    size={RFPercentage(3)}
                    color={Colors.ColorBlack()}
                  />
                </View>
                <Text
                  style={{
                    color: Colors.ColorBlack(),
                    fontSize: RFPercentage(3.5),
                  }}
                >
                  Pesanan
                </Text>
                <Icon
                  style={{
                    position: "absolute",
                    right: 0,
                    top: RFPercentage(2),
                  }}
                  name="chevron-right"
                  size={RFPercentage(5)}
                  color={Colors.ColorBlack()}
                />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default feed;
