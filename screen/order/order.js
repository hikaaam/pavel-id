import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RFPercentage } from "react-native-responsive-fontsize";

//Components
import Back from "../../components/backToDevelopment";
import { TextInput } from "react-native-gesture-handler";
import btn from "../../components/ButtonBiru";
import LabelText from "../../components/LabelText";
import TextHarga from "../../components/TextHarga";

//colors
import colors from "../../colors/colors";

class order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocus: false,
      catatan: "",
      count: 1,
      harga: 15000,
    };
  }

  render() {
    return (
      <KeyboardAwareScrollView
        style={
          {
            // paddingBottom:RFPercentage(2)
          }
        }
      >
        <ScrollView
          style={{
            // flex: 1,
            backgroundColor: colors.ColorBackground(),
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#c4c4c4",
              height: RFPercentage(23),
              justifyContent: "center",
              alignItems: "center",
            }}
            activeOpacity={0.7}
            onPress={() => {
              alert("upload foto");
            }}
          >
            <Ionicons name="ios-camera" size={RFPercentage(5)} />
            <Text
              style={{
                fontSize: RFPercentage(2),
                fontWeight: "normal",
              }}
            >
              Unggah Foto
            </Text>
          </TouchableOpacity>
          <View
            style={{
              paddingHorizontal: RFPercentage(2),
              paddingTop: RFPercentage(2),
            }}
          >
            <View
              style={{
                borderColor: colors.ColorGrayFade(),
                borderBottomWidth: 1,
              }}
            >
              <LabelText text="Detail Layanan" fontWeight="bold" />
              <Text
                style={{
                  fontSize: RFPercentage(2),
                  color: colors.ColorGrayPrimary(),
                  fontWeight: "normal",
                  marginVertical: RFPercentage(1),
                }}
              >
                Layanan Fast Clean estimasi X hari
              </Text>
              {this.RenderDetailLayanan("lorem ipsum")}
              {this.RenderDetailLayanan("dolores")}
              {this.RenderDetailLayanan("sit amet")}
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottomWidth: 1,
                paddingVertical: RFPercentage(1.5),
                borderColor: colors.ColorGrayFade(),
              }}
            >
              <LabelText text="Jumlah Order" fontWeight="bold" />
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <TouchableOpacity
                  style={{
                    height: RFPercentage(5.5),
                    backgroundColor: colors.ColorWhite(),
                    width: RFPercentage(6.5),
                    justifyContent: "center",
                    alignItems: "center",
                    borderColor: colors.ColorPrimary(),
                    borderWidth: 1.5,
                    elevation: 2,
                    borderTopLeftRadius: 15,
                    borderBottomLeftRadius: 15,
                  }}
                  activeOpacity={0.7}
                  onPress={() => {
                    let val = this.state.count - 1;
                    if (val < 1) {
                      val = 1;
                    }
                    let harga = val * 15000;
                    this.setState({
                      count: val,
                      harga: harga,
                    });
                  }}
                >
                  <Text
                    style={{
                      fontSize: RFPercentage(2),
                      fontWeight: "bold",
                      fontSize: RFPercentage(3),
                      color: colors.ColorSecondary(),
                    }}
                  >
                    -
                  </Text>
                </TouchableOpacity>

                <View
                  style={{
                    height: RFPercentage(5.5),
                    backgroundColor: colors.ColorWhite(),
                    width: RFPercentage(5.5),
                    justifyContent: "center",
                    alignItems: "center",
                    borderColor: colors.ColorPrimary(),
                    borderTopWidth: 1.5,
                    borderBottomWidth: 1.5,
                    elevation: 2,
                  }}
                >
                  <Text
                    style={{
                      fontSize: RFPercentage(2),
                      fontWeight: "bold",
                      fontSize: RFPercentage(3),
                      color: colors.ColorBlack(),
                    }}
                  >
                    {this.state.count}
                  </Text>
                </View>

                <TouchableOpacity
                  style={{
                    height: RFPercentage(5.5),
                    backgroundColor: colors.ColorWhite(),
                    width: RFPercentage(6.5),
                    justifyContent: "center",
                    alignItems: "center",
                    borderColor: colors.ColorPrimary(),
                    borderWidth: 1.5,
                    elevation: 2,
                    borderTopRightRadius: 15,
                    borderBottomRightRadius: 15,
                  }}
                  activeOpacity={0.7}
                  onPress={() => {
                    this.setState({
                      count: this.state.count + 1,
                      harga: (this.state.count + 1) * 15000,
                    });
                  }}
                >
                  <Text
                    style={{
                      fontSize: RFPercentage(2),
                      fontWeight: "bold",
                      color: colors.ColorSecondary(),
                      fontSize: RFPercentage(3),
                    }}
                  >
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottomWidth: 1,
                paddingVertical: RFPercentage(1.5),
                borderColor: colors.ColorGrayFade(),
              }}
            >
              <LabelText text="Biaya" fontWeight="bold" />
              <TextHarga
                text={"Rp " + this.state.harga}
                color={colors.ColorSecondary()}
                fontWeight="bold"
              />
            </View>
            <View
              style={{
                flexDirection: "column",
                width: "100%",
                paddingVertical: RFPercentage(1.5),
              }}
            >
              <LabelText text="Catatan" fontWeight="bold" />
              <Back />
              <TextInput
                multiline
                maxLength={255}
                style={{
                  marginTop: RFPercentage(1),
                  borderColor: this.state.isFocus
                    ? colors.ColorPrimary()
                    : colors.ColorBorder(),
                  borderWidth: 1,
                  height: RFPercentage(15),
                  borderRadius: 10,
                  paddingLeft: RFPercentage(1.2),
                  paddingRight: RFPercentage(1.2),
                  paddingTop: RFPercentage(0.5),
                  paddingBottom: RFPercentage(0.5),
                  textAlignVertical: "top",
                  elevation: 1,
                  backgroundColor: colors.ColorWhite(),
                  fontSize: RFPercentage(2.3),
                }}
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
                    catatan: txt,
                  });
                }}
              />
            </View>
            <View style={{ marginBottom: RFPercentage(1.5) }}>
              {btn.Btn("TAMBAH KE KERANJANG", 0, () => {
                alert("Tambah ke keranjang");
              })}
            </View>
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    );
  }

  RenderDetailLayanan(txt) {
    return (
      <Text
        style={{
          fontSize: RFPercentage(2),
          color: colors.ColorGrayPrimary(),
          fontWeight: "normal",
          marginBottom: RFPercentage(1),
        }}
      >
        - {txt}
      </Text>
    );
  }
}

export default order;
