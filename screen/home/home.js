import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { StatusBar } from "expo";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFPercentage } from "react-native-responsive-fontsize";

//CustomComponents
import CompenentHeader from "../../components/Header";
import Back from "../../components/backToDevelopment";
import Promo from "../../components/CardViewPromo";

//colors
import colors from "../../colors/colors";

//db
import db from '../../database/DB';
import AsyncStorage from "@react-native-async-storage/async-storage";

import BtmNav from '../../components/BottomNav';

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama:"Ilyas abdurahman yusuf "
    };
  }
  componentDidMount(){
    // AsyncStorage.getItem('user').then((data)=> JSON.parse(data)).then((data)=>{
    //     console.log(data)
    //     this.setState({
    //       nama:data.nama
    //     })
    // })
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: colors.ColorBackground() }}>
        <CompenentHeader />
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
            style={{ color: colors.ColorWhite(), fontSize: RFPercentage(2.6), fontWeight:'bold' }}
          >
            Pavel Clean
          </Text>
          <View style={{ right: RFPercentage(5) }}>
            <TouchableOpacity onPress={()=>{
              this.props.navigation.navigate('Keranjang')
            }}>
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
                {this.renderLayananIcon(
                  "flash-outline",
                  "#ffce47",
                  "Fast Clean",
                  () => {
                    alert("Fast Clean");
                  }
                )}
                {this.renderLayananIcon(
                  "ios-medical",
                  colors.ColorRed(),
                  "Deep Clean",
                  () => {
                    alert("Deep Clean");
                  }
                )}
                {this.renderLayananIcon(
                  "repeat-outline",
                  "#d59d01",
                  "Unyellowing",
                  () => {
                    alert("Unyellowing");
                  }
                )}
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                {this.renderLayananIcon(
                  "bandage-outline",
                  "#9a895b",
                  "Leather Treatment",
                  () => {
                    alert("Leather Treatment");
                  }
                )}
                {this.renderLayananIcon(
                  "brush-outline",
                  "#0dbf28",
                  "Pengeleman Ulang",
                  () => {
                    alert("Pengeleman Ulang");
                  }
                )}
                {this.renderLayananIcon(
                  "color-palette-outline",
                  "#198cf0",
                  "Repaint",
                  () => {
                    alert("Repaint");
                  }
                )}
              </View>
            </View>
          </View>
          <View
            style={{
              marginTop: RFPercentage(2),
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
              {Promo.Promo(
                "https://i2.wp.com/etalaseserpong.com/wp-content/uploads/2019/08/090819-ilustrasi-promo.jpg?resize=696%2C502&ssl=1",
                "Fast Clean + Unyellowing",
                false,
                () => {}
              )}
              {Promo.Promo(
                "https://i2.wp.com/etalaseserpong.com/wp-content/uploads/2019/08/090819-ilustrasi-promo.jpg?resize=696%2C502&ssl=1",
                "Fast Clean + Unyellowing",
                true,
                () => {}
              )}
              {Promo.Promo(
                "https://i2.wp.com/etalaseserpong.com/wp-content/uploads/2019/08/090819-ilustrasi-promo.jpg?resize=696%2C502&ssl=1",
                "Fast Clean + Unyellowing",
                true,
                () => {}
              )}
              {Promo.Promo(
                "https://i2.wp.com/etalaseserpong.com/wp-content/uploads/2019/08/090819-ilustrasi-promo.jpg?resize=696%2C502&ssl=1",
                "Fast Clean + Unyellowing",
                true,
                () => {}
              )}
            </ScrollView>

          </View>
          <BtmNav />
        </View>
      </ScrollView>
    );
  }
  renderLayananIcon(IconName, IconColor, text, Funct) {
    return (
      <View>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
          activeOpacity={0.5}
          onPress={() => {
            Funct();
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: RFPercentage(9.5),
              height: RFPercentage(9.5),
              borderWidth: 1,
              borderColor: colors.ColorBorder(),
              borderRadius: 100,
              backgroundColor: colors.ColorBackground(),
            }}
          >
            <Ionicons
              name={IconName}
              color={IconColor}
              size={RFPercentage(8)}
            />
          </View>

          <View
            style={{
              width: RFPercentage(12),
              justifyContent: "center",
              alignItems: "center",
              top: RFPercentage(0.7),
            }}
          >
            <Text
              style={{
                fontWeight: "normal",
                fontSize: RFPercentage(2),
                color: colors.ColorGraySecondary(),
                textAlign: "center",
              }}
            >
              {text}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default home;
