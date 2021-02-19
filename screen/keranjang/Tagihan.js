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
import CardViewPembayaran from "../../components/CardViewPembayaran";
import CardViewBank from "../../components/CardViewPilihanBank";

//color
import colors from "../../colors/colors";

class Tagihan extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        <View style={{ marginHorizontal: RFPercentage(2) }}>
          {/* card view */}
          <CardViewPembayaran
            ongkir={this.state.ongkir}
            subtotal={this.state.subtotal}
            total={this.state.total}
          />
          <View style={{ marginTop: RFPercentage(3) }}>
            {/* pilihan bank */}
            <CardViewBank
              image={require("../../assets/icons/bca.png")}
              nama="Bank BCA"
            />
            <Back />
            <CardViewBank
              image={require("../../assets/icons/bri.png")}
              nama="Bank BRI"
            />
            <CardViewBank
              image={require("../../assets/icons/mandiri.png")}
              nama="Bank Mandiri"
            />
          </View>
          {Btn.Btn("PILIH", RFPercentage(0.5), () => {
            this.props.navigation.navigate('Pembayaran')
          })}
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default Tagihan;
