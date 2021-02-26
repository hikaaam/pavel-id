import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { StatusBar } from "expo";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFPercentage } from "react-native-responsive-fontsize";

//CustomComponents
import ComponentHeader from "../../components/header";
// import CompenentHeader from "../../components/Header";
import Back from "../../components/backToDevelopment";
import Promo from "../../components/CardViewPromo";
import LayananIcon from "../../components/LayananIcon";
import PromoCard from "../../components/CardViewPromo";

//colors
import colors from "../../colors/colors";

//db
import db from "../../database/DB";
import AsyncStorage from "@react-native-async-storage/async-storage";

import BtmNav from "../../components/BottomNav";

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: "Ilyas abdurahman yusuf ",
    };
  }
  componentDidMount() {
    // AsyncStorage.getItem('user').then((data)=> JSON.parse(data)).then((data)=>{
    //     console.log(data)
    //     this.setState({
    //       nama:data.nama
    //     })
    // })
  }

  render() {
    return (
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: colors.ColorBackground() }}
      >
        <ComponentHeader />
        {/* header */}
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            width: "100%",
            paddingTop: RFPercentage(6),
            marginHorizontal: RFPercentage(2.5),
          }}
        >
          <Text
            style={{
              color: colors.ColorWhite(),
              fontSize: RFPercentage(2.6),
              fontWeight: "bold",
            }}
          >
            Pavel Clean
          </Text>
          <View style={{ right: RFPercentage(5) }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Keranjang");
              }}
            >
              <Ionicons
                color={colors.ColorWhite()}
                name="ios-cart-outline"
                size={RFPercentage(6)}
              />
              <View
                style={{
                  position: "absolute",
                  top: RFPercentage(2.7),
                  left: 0,
                  backgroundColor: colors.ColorRed(),
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
                    color: colors.ColorWhite(),
                  }}
                >
                  1
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: RFPercentage(2.5),
          }}
        >
          <View style={{ marginTop: RFPercentage(2) }}>
            <Text
              style={{
                fontSize: RFPercentage(3),
                color: colors.ColorBackground(),
              }}
            >
              Selamat Datang,
            </Text>
            <Text
              style={{
                fontSize: RFPercentage(3.5),
                color: colors.ColorWhite(),
                fontWeight: "bold",
              }}
            >
              {this.state.nama}!
            </Text>
          </View>
          <View
            style={{
              padding: RFPercentage(3),
              backgroundColor: colors.ColorWhite(),
              marginTop: RFPercentage(2.4),
              borderRadius: 12,
              elevation: 4,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: RFPercentage(3),
                color: colors.ColorBlack(),
              }}
            >
              Layanan
            </Text>
            <Text
              style={{
                fontSize: RFPercentage(2.2),
                color: colors.ColorGraySecondary(),
                fontWeight: "normal",
                marginBottom: RFPercentage(1),
              }}
            >
              Pilih layanan terbaik untuk Anda
            </Text>
            <Back />
            <View
              style={{
                borderTopWidth: 1.5,
                borderTopColor: colors.ColorSecondary(),
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: RFPercentage(3),
                  marginBottom: RFPercentage(3),
                }}
              >
                <LayananIcon
                  IconName={require("../../assets/icons/1_fast_clean.png")}
                  text="Fast Clean"
                  onPress={() => {
                    alert("Fast Clean");
                  }}
                />
                <LayananIcon
                  IconName={require("../../assets/icons/2_deep_clean.png")}
                  text="Deep Clean"
                />
                <LayananIcon
                  IconName={require("../../assets/icons/3_unyellowing.png")}
                  text="Unyellowing"
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <LayananIcon
                  IconName={require("../../assets/icons/4_leather_treatment.png")}
                  text="Leather Treatment"
                />
                <LayananIcon
                  IconName={require("../../assets/icons/5_pengeleman.png")}
                  text="Pengeleman Ulang"
                />
                <LayananIcon
                  IconName={require("../../assets/icons/6_repaint.png")}
                  text="Repaint"
                />
              </View>
            </View>
          </View>
          {/* promo section */}
          <View
            style={{
              marginVertical: RFPercentage(2),
            }}
          >
            <Text
              style={{
                fontSize: RFPercentage(3),
                fontWeight: "bold",
                color: colors.ColorBlack(),
              }}
            >
              Promo{" "}
            </Text>
            <Text
              style={{
                fontSize: RFPercentage(2.2),
                color: colors.ColorGraySecondary(),
                fontWeight: "normal",
              }}
            >
              Nikmati promo dengan harga terbaik
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{ marginTop: RFPercentage(2) }}
            >
              <PromoCard
                first
                image="https://i2.wp.com/etalaseserpong.com/wp-content/uploads/2019/08/090819-ilustrasi-promo.jpg?resize=696%2C502&ssl=1"
                text="Fast Clean + Unyellowing"
                onPress={() => {}}
              />
              <PromoCard
                image="https://i2.wp.com/etalaseserpong.com/wp-content/uploads/2019/08/090819-ilustrasi-promo.jpg?resize=696%2C502&ssl=1"
                text="Fast Clean + Unyellowing"
                onPress={() => {}}
              />
              <PromoCard
                image="https://i2.wp.com/etalaseserpong.com/wp-content/uploads/2019/08/090819-ilustrasi-promo.jpg?resize=696%2C502&ssl=1"
                text="Fast Clean + Unyellowing"
                onPress={() => {}}
              />
              <PromoCard
                image="https://i2.wp.com/etalaseserpong.com/wp-content/uploads/2019/08/090819-ilustrasi-promo.jpg?resize=696%2C502&ssl=1"
                text="Fast Clean + Unyellowing"
                onPress={() => {}}
              />
            </ScrollView>
          </View>
          <BtmNav />
        </View>
      </ScrollView>
    );
  }
}

export default home;
