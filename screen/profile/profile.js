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
import ButtonList from "../../components/ButtonList";
import Copyright from "../../components/Copyright";
import Avatar from "../../components/Avatar";

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
            Profile
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
            <Avatar
              size={"80%"}
              resizeMode="contain"
              source={require("../../assets/icons/ic_google.png")}
              otherStyleProps={{
                marginBottom: RFPercentage(2),
              }}
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
              marginTop: RFPercentage(0.3),
            }}
          >
            <View
              style={{
                paddingHorizontal: RFPercentage(2),
                margintop: RFPercentage(1),
                marginBottom: RFPercentage(3),
                paddingTop: RFPercentage(2),
              }}
            >
              <Text
                style={{
                  fontSize: RFPercentage(2.5),
                  fontWeight: "bold",
                  color: Colors.ColorBlack(),
                }}
              >
                Akun
              </Text>
              <ButtonList
                title="My Profile"
                iconName="person-outline"
                onPress={() => {}}
              />
              <ButtonList
                title="Voucher Saya"
                iconName="receipt-outline"
                onPress={() => {}}
              />
              <ButtonList
                title="Ulasan saya"
                iconName="heart-outline"
                onPress={() => {}}
              />
              <ButtonList
                title="Undang teman pakai Pavel"
                iconName="person-add-outline"
                onPress={() => {}}
              />
              <ButtonList
                title="Pengaturan"
                iconName="options-outline"
                onPress={() => {}}
              />
              <Text
                style={{
                  fontSize: RFPercentage(2.2),
                  fontWeight: "bold",
                  color: Colors.ColorBlack(),
                  marginTop: RFPercentage(2),
                }}
              >
                Info Lainnya
              </Text>
              <ButtonList
                title="Pusat bantuan"
                iconName="chatbox-ellipses-outline"
                onPress={() => {}}
              />
              <ButtonList
                title="Kebijakan layanan"
                iconName="create-outline"
                onPress={() => {}}
              />
              <ButtonList
                title="Beri kami rating"
                iconName="happy-outline"
                onPress={() => {}}
              />
            </View>
            {/* <Copyright /> */}
          </ScrollView>
        </View>
      </View>
    );
  }
}
const renderPromoCard = () => {
  {
    /* <View
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
            </View> */
  }
};
export default feed;
