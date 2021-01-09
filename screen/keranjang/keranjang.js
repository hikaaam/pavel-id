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
import CustomLabel from "../../components/CustomLabelInput";

//color
import colors from "../../colors/colors";

class keranjang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      area: "tegal",
    };
  }

  render() {
    return (
      <KeyboardAwareScrollView
        style={{ backgroundColor: colors.ColorBackground() }}
      >
        <View style={{}}>
          {/* container item */}
          <View
            style={{
              backgroundColor: colors.ColorWhite(),
              elevation: 4,
              marginHorizontal: RFPercentage(2),
              marginTop: RFPercentage(1),
              borderRadius: 10,
              padding: RFPercentage(1),
            }}
          >
            <View style={{ flexDirection: "row" }}>
              {/* foto barang */}
              <View
                style={{ width: RFPercentage(11), height: RFPercentage(11) }}
              >
                <Image
                  style={{
                    flex: 1,
                    height: undefined,
                    width: undefined,
                    resizeMode: "cover",
                    borderRadius: 10,
                  }}
                  source={{
                    uri:
                      "https://cdn-brilio-net.akamaized.net/video/2017/10/10/146649/682899-5-sepatu-termahal-di-dunia-yang-harganya-lebih-mahal-dari-supercar-ada-di-dindonesia-mahasiswa-abadi.jpg",
                  }}
                />
              </View>
              {/* detail barang */}
              <View
                style={{
                  left: RFPercentage(1),
                  flex: 1,
                  width: "100%",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                  }}
                >
                  <Text
                    style={{
                      color: colors.ColorBlack(),
                      fontWeight: "600",
                      fontSize: RFPercentage(3),
                      width: "80%",
                      flex: 1,
                      color: colors.ColorSecondary(),
                    }}
                  >
                    Sepatu Fast Clean + Unyellowing
                  </Text>
                  <Pressable
                    onPress={() => {
                      alert("item dibuang");
                    }}
                  >
                    <Ionicons
                      name="trash-outline"
                      color={colors.ColorBlack()}
                      size={RFPercentage(4)}
                      style={{ right: RFPercentage(1) }}
                    />
                  </Pressable>
                </View>
                {/* jumlah barang */}
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "white",
                  }}
                >
                  <Text>Jumlah :</Text>
                  <Text
                    style={{
                      left: RFPercentage(1),
                      fontSize: RFPercentage(2.5),
                      color: colors.ColorSecondary(),
                      fontWeight: "bold",
                    }}
                  >
                    1
                  </Text>
                </View>
              </View>
            </View>
            {/* catatan */}
            <View
              style={{
                flexDirection: "row",
                borderWidth: 1,
                borderRadius: 3,
                borderColor: colors.ColorGrayFade(),
                padding: RFPercentage(1),
                marginTop: RFPercentage(1),
              }}
            >
              <Text>Catatan :</Text>
              <Text
                numberOfLines={3}
                style={{ paddingLeft: RFPercentage(1), flex: 1, width: "75%" }}
              >
                Lorem ipsum dolor sit amet asdasd asasj dkas hdashd jasdhasj
                dhas jdas dashd has djhasdjashdasjdhasdjashddjas asj
                dashdasdhjdh asjdh asj hdajshdjs ahsdha dhja hdjas hdjas
                hdjahdasjdh asjdashdasjdhasjh dasj dh asdj
              </Text>
              <Back />
            </View>
          </View>
          {/* btn tambah item */}
          <View
            style={{
              marginHorizontal: RFPercentage(2),
              marginTop: RFPercentage(2),
              marginBottom: RFPercentage(2),
              alignItems: "flex-end",
            }}
          >
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
              borderTopWidth: 2,
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
                <CustomLabel text="Outlet Area" />
                <TouchableOpacity
                  style={{ left: RFPercentage(1) }}
                  onPress={() => {
                    alert("?");
                  }}
                >
                  <Ionicons
                    name="help-circle-outline"
                    size={20}
                    color={colors.ColorSecondary()}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  backgroundColor: colors.ColorWhite(),
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: colors.ColorSecondary(),
                  paddingLeft: RFPercentage(2),
                  paddingRight: RFPercentage(2),
                  flex: 1,
                  justifyContent: "center",
                }}
              >
                <Picker
                  selectedValue={this.state.area}
                  style={{
                    height: RFPercentage(7),
                    width: "100%",
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
              <CustomLabel text="Alamat Pickup" />
              <View
                style={{
                  backgroundColor: colors.ColorWhite(),
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: colors.ColorSecondary(),
                  paddingLeft: RFPercentage(2),
                  paddingTop: RFPercentage(0.5),
                  paddingBottom: RFPercentage(0.5),
                  flex: 1,
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <TextInput
                    multiline
                    style={{
                      flex: 1,
                      height: RFPercentage(8),

                      fontSize: RFPercentage(2.2),
                    }}
                  />
                  <Pressable
                    style={{
                      borderLeftWidth: 2,
                      borderColor: colors.ColorSecondary(),
                      alignItems: "center",
                      justifyContent: "center",
                      width: RFPercentage(8),
                    }}
                    onPress={() => {
                      alert("map");
                    }}
                  >
                    <Ionicons name="map-outline" size={RFPercentage(6.5)} />
                  </Pressable>
                </View>
              </View>
            </View>
            <View
              style={{
                marginBottom: RFPercentage(2),
              }}
            >
              <View style={{ marginBottom: RFPercentage(2) }}>
                <View style={{ flexDirection: "row" }}>
                  <CustomLabel text="Biaya" />
                  <TouchableOpacity
                    style={{ left: RFPercentage(1) }}
                    onPress={() => {
                      alert("?");
                    }}
                  >
                    <Ionicons
                      name="help-circle-outline"
                      size={20}
                      color={colors.ColorSecondary()}
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: colors.ColorSecondary(),
                      fontWeight: "bold",
                      fontSize: RFPercentage(3.5),
                    }}
                  >
                    Rp 5000
                  </Text>
                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      borderWidth: 1,
                      borderColor: colors.ColorSecondary(),
                      borderRadius: 4,
                      padding: RFPercentage(1),
                    }}
                    onPress={() => {
                      alert("menggunakan promo");
                    }}
                  >
                    <Ionicons
                      name="pricetags-outline"
                      size={RFPercentage(2.5)}
                      style={{}}
                    />
                    <Text
                      style={{
                        fontSize: RFPercentage(2),
                        color: colors.ColorPrimary(),
                        marginLeft: RFPercentage(1),
                      }}
                    >
                      Gunakan Promo
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/* button checkout */}
            <TouchableOpacity
              style={{
                flex: 1,
                width: "100%",
                marginTop: RFPercentage(1),
                height: RFPercentage(8.5),
                backgroundColor: colors.ColorSecondary(),
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderColor: colors.ColorBorder(),
                borderRadius: 10,
                elevation: 5,
                marginBottom: RFPercentage(2),
              }}
              onPress={() => {
                alert("cek out");
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  marginHorizontal: RFPercentage(2),
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: RFPercentage(3),
                    color: colors.ColorWhite(),
                    flex: 1,
                  }}
                >
                  Total
                </Text>
                <Text
                  style={{
                    fontSize: RFPercentage(3.5),
                    color: colors.ColorWhite(),
                    fontWeight: "bold",
                  }}
                >
                  Rp 20000
                </Text>
                <Ionicons
                  name="caret-forward-outline"
                  color={colors.ColorWhite()}
                  size={RFPercentage(5)}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default keranjang;
