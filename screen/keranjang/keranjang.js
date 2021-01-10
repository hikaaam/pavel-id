import React, { Component } from "react";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Picker } from "@react-native-picker/picker";
import Ionicons from "react-native-vector-icons/Ionicons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";

//Components
import Back from "../../components/backToDevelopment";
import Btn from "../../components/ButtonBiru";
import CustomButton from "../../components/CustomSizeButtonBiru";
import LabelText from "../../components/LabelText";
import TextHarga from "../../components/TextHarga";
import ButtonHelp from "../../components/ButtonHelp";
import ButtonGunakanPromo from "../../components/ButtonGunakanPromo";
import CardViewItem from "../../components/CardViewItemKeranjang";

//color
import colors from "../../colors/colors";

class keranjang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocus: false,
      area: "tegal",
      alamat: "",
      ongkir: "5000",
      subtotal: "150000",
      total: "155000",
    };
  }

  render() {
    return (
      <KeyboardAwareScrollView
        style={{ backgroundColor: colors.ColorBackground() }}
      >
        <View style={{}}>
          {/* card item */}
          <CardViewItem
            nama="Fast Clean + Unyellowing"
            jumlah="1"
            catatan="Lorem ipsum dolor sit amet weleh weleh"
            image="http://fs.genpi.co/uploads/news/normal/2019/04/24/aca9a6e2364d9ee86aa0e0275832cb72.jpg"
          />
          <CardViewItem
            nama="Deep Clean + Unyellowing"
            jumlah="10"
            catatan="Lorem ipsum dolor sit amet weleh weleh x 10"
            image="https://cdn-brilio-net.akamaized.net/video/2017/10/10/146649/682899-5-sepatu-termahal-di-dunia-yang-harganya-lebih-mahal-dari-supercar-ada-di-dindonesia-mahasiswa-abadi.jpg"
          />
          {/* btn tambah item */}
          <View
            style={{
              marginHorizontal: RFPercentage(2),
              marginTop: RFPercentage(2),
              marginBottom: RFPercentage(2),
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <LabelText text="Total Item: 2" />
            <CustomButton
              txt="Tambah Item"
              height={RFPercentage(5)}
              width="100%"
              borderRadius={5}
              onPress={() => {
                alert("tambah item");
              }}
            />
          </View>
          {/* form */}
          <View
            style={{
              marginHorizontal: RFPercentage(2),
              borderTopWidth: 1,
              borderTopColor: colors.ColorGrayFade(),
            }}
          >
            <View
              style={{
                marginTop: RFPercentage(2),
                marginBottom: RFPercentage(2),
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <LabelText text="Outlet Area" />
                <ButtonHelp
                  onPress={() => {
                    alert("informasi tentang outlet yang tersedia");
                  }}
                />
              </View>
              <View
                style={{
                  backgroundColor: colors.ColorBackground(),
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: colors.ColorGrayPrimary(),
                  flex: 1,
                  paddingRight: RFPercentage(1),
                  justifyContent: "center",
                }}
              >
                <Picker
                  selectedValue={this.state.area}
                  style={{
                    height: RFPercentage(7),
                    flex: 1,
                    fontSize: RFPercentage(5),
                  }}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ area: itemValue })
                  }
                >
                  <Picker.Item label="Tegal" value="tegal" />
                  <Picker.Item label="Pemalang" value="pemalang" />
                </Picker>
              </View>
            </View>
            <View style={{ marginBottom: RFPercentage(2) }}>
              <LabelText text="Alamat Pickup" />
              <Back />
              <View style={{ flexDirection: "row" }}>
                <TextInput
                  multiline
                  placeholder="Masukan alamat Anda"
                  onFocus={() => {
                    this.setState({
                      isFocus: true,
                    });
                  }}
                  onBlur={() => {
                    this.setState({
                      isFocus: false,
                    });
                  }}
                  onChangeText={(txt) => {
                    this.setState({
                      alamat: txt,
                    });
                  }}
                  style={{
                    flex: 1,
                    height: RFPercentage(7),
                    fontSize: RFPercentage(2.2),
                    borderWidth: 2,
                    borderRadius: 10,
                    padding: RFPercentage(1),
                    borderColor: this.state.isFocus
                      ? colors.ColorSecondary()
                      : colors.ColorGrayPrimary(),
                  }}
                />
                <Pressable
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    width: RFPercentage(8),
                  }}
                  onPress={() => {
                    alert("map");
                  }}
                >
                  <Ionicons
                    name="map-outline"
                    size={RFPercentage(6.5)}
                    color={colors.ColorSecondary()}
                  />
                </Pressable>
              </View>
            </View>
            <View style={{}}>
              <View style={{ marginBottom: RFPercentage(1) }}>
                <View style={{ flexDirection: "row" }}>
                  <LabelText text="Biaya Kurir" />
                  <ButtonHelp
                    flex={1}
                    onPress={() => {
                      alert("informasi tentang kenapa harga sekian");
                    }}
                  />
                  <TextHarga
                    text={"Rp " + this.state.ongkir}
                    color={colors.ColorSecondary()}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <LabelText text="Subtotal Layanan" />
                  <TextHarga
                    text={"Rp " + this.state.subtotal}
                    color={colors.ColorSecondary()}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    borderBottomWidth: 1,
                    borderColor: colors.ColorGrayFade(),
                    paddingBottom: RFPercentage(2),
                  }}
                >
                  <LabelText text="Total" />
                  <TextHarga
                    text={"Rp " + this.state.total}
                    color={colors.ColorSecondary()}
                  />
                </View>
              </View>
            </View>
            {/* button promo dan checkout*/}
            <View style={{ marginBottom: RFPercentage(2) }}>
              <ButtonGunakanPromo />
              {Btn.Btn("CHECKOUT", RFPercentage(0.5), () => {
                alert("cekout");
              })}
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default keranjang;
