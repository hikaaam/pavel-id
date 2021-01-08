import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFPercentage } from 'react-native-responsive-fontsize';

//CustomComponents
import CompenentHeader from '../../components/header';
import Back from '../../components/backToDevelopment';
import Promo from '../../components/CardViewPromo';

//colors
import colors from '../../colors/colors';

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: colors.ColorBackground() }}>
        <CompenentHeader />
        <View style={{
          paddingHorizontal: RFPercentage(2.5),
        }}>
          <View style={{ marginTop: RFPercentage(2) }}>
            <Text style={{
              fontSize: RFPercentage(3),
              color: colors.ColorBackground()
            }}>Selamat Datang,</Text>
            <Text style={{
              fontSize: RFPercentage(3.5),
              color: colors.ColorWhite(),
              fontWeight: 'bold'
            }}>Qodim Ibnu Salam!</Text>
          </View>
          <View style={{
            padding: RFPercentage(2),
            backgroundColor: colors.ColorWhite(),
            marginTop: RFPercentage(2.4),
            borderRadius: 12,
            borderColor: colors.ColorBorder(),
            borderWidth: 1,
            elevation: 4
          }}>
            <Text style={{
              fontWeight: "bold",
              fontSize: RFPercentage(3)
            }}>Layanan</Text>
            <Text style={{
              fontSize: RFPercentage(2.2),
              color: colors.ColorBorder(),
              fontWeight: "bold"
            }}>Pilih layanan terbaik untuk anda</Text>
            <View style={{
              borderTopWidth: 2.2,
              borderTopColor: colors.ColorPrimary(),
              paddingTop: RFPercentage(3),
            }}>
              <View style={{
                flexDirection: 'row',
                justifyContent: "space-between",
                paddingHorizontal: RFPercentage(0.2),
                marginBottom: RFPercentage(3)
              }}>
                {this.renderLayananIcon("ios-ice-cream", colors.ColorRed(), "Fast Clean", () => { alert("Fast Clean") })}
                {this.renderLayananIcon("ios-medical", colors.ColorRed(), "Deep Clean", () => { alert("Deep Clean") })}
                {this.renderLayananIcon("ios-flask", colors.ColorRed(), "Unyellowing", () => { alert("Unyellowing") })}
              </View>
              <View style={{
                flexDirection: 'row',
                justifyContent: "space-between",
                paddingHorizontal: RFPercentage(0.2),
                marginBottom: RFPercentage(3)
              }}>
                {this.renderLayananIcon("ios-ice-cream", colors.ColorRed(), "Leather Treatment", () => { alert("Leather Treatment") })}
                {this.renderLayananIcon("ios-medical", colors.ColorRed(), "Pengelaman Ulang", () => { alert("Pengeleman Ulang") })}
                {this.renderLayananIcon("ios-flask", colors.ColorRed(), "Repaint", () => { alert("Repaint") })}
              </View>
            </View>
          </View>
          <View style={{
            marginTop: RFPercentage(3)
          }}>
            <Text style={{
              fontSize: RFPercentage(3),
              fontWeight: 'bold'
            }}>Promo </Text>
            <Text style={{
              fontSize: RFPercentage(2.2),
              color: colors.ColorBorder(),
              fontWeight: "bold"
            }}>Nikmati promo dengan harga terbaik</Text>
            <ScrollView horizontal={true} style={{marginTop:RFPercentage(2)}}>
              {Promo.Promo("https://i2.wp.com/etalaseserpong.com/wp-content/uploads/2019/08/090819-ilustrasi-promo.jpg?resize=696%2C502&ssl=1","Fast Clean + Unyellowing",false,()=>{})}
              {Promo.Promo("https://i2.wp.com/etalaseserpong.com/wp-content/uploads/2019/08/090819-ilustrasi-promo.jpg?resize=696%2C502&ssl=1","Fast Clean + Unyellowing",true,()=>{})}
    
            </ScrollView>
          </View>
        </View>
        <Back />
      </ScrollView>
    );
  }
  renderLayananIcon(IconName, IconColor, text, Funct) {
    return (
      <View>
        <TouchableOpacity style={{
          justifyContent: 'center',
          alignItems: 'center'
        }} activeOpacity={0.5} onPress={() => {
          Funct()
        }}>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: RFPercentage(9.5),
            height: RFPercentage(9.5),
            borderWidth: 1,
            borderColor: colors.ColorBorder(),
            borderRadius: 100,
            backgroundColor: colors.ColorBackground()
          }}>
            <Ionicons name={IconName} color={IconColor} size={RFPercentage(8)} />
          </View>
        </TouchableOpacity>
        <View style={{ width: RFPercentage(12), justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{
            fontWeight: 'bold',
            fontSize: RFPercentage(2),
            color: colors.ColorGraySecondary(),
            textAlign: 'center'
          }}>{text}</Text>
        </View>
      </View>
    )
  }
}

export default home;
