import React, { Component } from "react";
import { RFPercentage } from "react-native-responsive-fontsize";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { View, Text, TouchableOpacity } from "react-native";

//Components
import Back from "../../components/backToDevelopment";
import Btn from "../../components/ButtonBiru";
import LabelText from "../../components/LabelText";
import TextHarga from "../../components/TextHarga";
import CardViewPembayaran from "../../components/CardViewPembayaran";
import CardViewBank from "../../components/CardViewPilihanBank";
import DetailRekening from "../../components/DetailRekening";
import StatusPembayaran from "../../components/StatusPembayaran";

//color
import colors from "../../colors/colors";

class Pembayaran extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // status sementara ada 3 : menunggu , diproses, dibatalkan
      status: "menunggu",
      // pilihan rekening sementara ada 3 : bca , bri , mandiri
      rekening: "mandiri",
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
        <View
          style={{
            marginHorizontal: RFPercentage(2),
            marginTop: RFPercentage(2),
          }}
        >
          {/* status */}
          <View style={{ marginBottom: RFPercentage(2) }}>
            <StatusPembayaran status={this.state.status} />
            <Back />
          </View>
          {/* total tagihan */}
          <View style={{ marginBottom: RFPercentage(2) }}>
            <LabelText text="Total Tagihan" grayed={true} />
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <TextHarga
                text={"Rp " + this.state.total}
                color={colors.ColorSecondary()}
                fontSize={RFPercentage(3)}
              />
              <TouchableOpacity
                onPress={() => {
                  alert("muncul popup rincian tagihan");
                }}
              >
                <LabelText
                  text="Rincian"
                  color={colors.ColorPrimary()}
                  fontWeight="bold"
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* Rekening */}
          <View style={{ marginBottom: RFPercentage(2) }}>
            <DetailRekening rekening={this.state.rekening} />
          </View>
          <LabelText text="Jika sudah melakukan transfer harap segera kirim bukti transfer" />
          {Btn.Btn("KIRIM BUKTI TRANSFER", RFPercentage(4), () => {
            alert("Membuka modal kirim gambar");
          })}
          <TouchableOpacity
            onPress={() => {
              alert("Membatalkan Pesanan");
            }}
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: colors.ColorRed(),
              height: RFPercentage(8.5),
              borderRadius: 10,
              marginTop: RFPercentage(2),
              marginBottom: RFPercentage(2),
              elevation: 4,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: RFPercentage(2.5),
                fontWeight: "bold",
              }}
            >
              BATALKAN PESANAN
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default Pembayaran;
