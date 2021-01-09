import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import colors from '../../colors/colors';
import { RFPercentage } from 'react-native-responsive-fontsize';


//Components
import Back from '../../components/backToDevelopment';
import { TextInput } from 'react-native-gesture-handler';
import btn from '../../components/ButtonBiru';

class order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocus:false,
      catatan:"",
      count:1
    };
  }

  render() {
    return (
      <KeyboardAwareScrollView style={{
        // paddingBottom:RFPercentage(2)
      }}>
      <ScrollView style={{
        // flex: 1,
        backgroundColor: colors.ColorBackground(),
      }}>
        <TouchableOpacity style={{
          backgroundColor: "#c4c4c4",
          height: RFPercentage(23),
          justifyContent: 'center',
          alignItems: 'center'
        }} activeOpacity={0.7} onPress={()=>{alert('upload foto')}}>
          <Ionicons name="ios-camera" size={RFPercentage(5)} />
          <Text style={{
            fontSize: RFPercentage(2),
            fontWeight: "bold"
          }}>Unggah Foto</Text>
        </TouchableOpacity>
        <View style={{
          paddingHorizontal: RFPercentage(2),
          paddingTop: RFPercentage(2)
        }}>
          <Text style={{
            fontSize: RFPercentage(2.5),
            fontWeight: 'bold'
          }}>Detail Layanan</Text>
          <Text style={{
            fontSize: RFPercentage(2),
            color: colors.ColorGraySecondary(),
            fontWeight: 'bold',
            marginVertical: RFPercentage(1)
          }}>Layanan Fast Clean estimasi X hari</Text>
          {this.RenderDetailLayanan("lorem ipsum")}
          {this.RenderDetailLayanan("dolores")}
          {this.RenderDetailLayanan("sit amet")}
          <Back />
          <View style={{
            flexDirection: 'row',
            width: "100%",
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTopWidth:1,
            borderBottomWidth:1,
            paddingVertical:RFPercentage(1.5),
            borderColor:colors.ColorBorder(),
          }}>
            <Text style={{
              fontSize: RFPercentage(2.5),
              fontWeight: 'bold'
            }}>Jumlah Order</Text>
            <View style={{
              flexDirection:'row'
            }}>

              <TouchableOpacity style={{
                height:RFPercentage(5.5),
                backgroundColor:colors.ColorWhite(),
                width:RFPercentage(5.5),
                justifyContent:'center',
                alignItems:'center',
                borderColor:colors.ColorPrimary(),
                borderWidth:1.5,
                elevation:2,
                borderTopLeftRadius:15,
                borderBottomLeftRadius:15
              }} activeOpacity={0.7} onPress={()=>{
                let val =  this.state.count-1;
                if(val<1){
                  val = 1;
                }
                this.setState({
                  count:val
                })
              }}>
                <Text style={{
                   fontSize:RFPercentage(2),
                   fontWeight:'bold'
                }}>-</Text>
              </TouchableOpacity>

              <View style={{
                 height:RFPercentage(5.5),
                 backgroundColor:colors.ColorWhite(),
                 width:RFPercentage(5.5),
                 justifyContent:'center',
                 alignItems:'center',
                 borderColor:colors.ColorPrimary(),
                borderTopWidth:1.5,
                borderBottomWidth:1.5,
                elevation:2,
              }}>
                <Text style={{
                  fontSize:RFPercentage(2),
                  fontWeight:'bold'
                }}>{this.state.count}</Text>
              </View>

              <TouchableOpacity style={{
                 height:RFPercentage(5.5),
                 backgroundColor:colors.ColorWhite(),
                 width:RFPercentage(5.5),
                 justifyContent:'center',
                 alignItems:'center',
                 borderColor:colors.ColorPrimary(),
                 borderWidth:1.5,
                 elevation:2,
                 borderTopRightRadius:15,
                 borderBottomRightRadius:15
              }} activeOpacity={0.7} onPress={()=>{                
                this.setState({
                  count:this.state.count+1
                })
              }}>
                <Text style={{
                   fontSize:RFPercentage(2),
                   fontWeight:'bold'
                }}>+</Text>
              </TouchableOpacity>

            </View>
          </View>
          <View style={{
            flexDirection: 'row',
            width: "100%",
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTopWidth:1,
            borderBottomWidth:1,
            paddingVertical:RFPercentage(1.5),
            borderColor:colors.ColorBorder(),
          }}>
            <Text style={{
              fontSize: RFPercentage(2.5),
              fontWeight: 'bold'
            }}>Biaya</Text>
            <Text style={{
              fontSize:RFPercentage(3.5),
              fontWeight:'bold',
              color:colors.ColorPrimary(),
              paddingVertical:RFPercentage(1)
            }}>Rp 15.000</Text>
          </View>
          <View style={{
             flexDirection: 'column',
             width: "100%",
             borderTopWidth:1,
             paddingVertical:RFPercentage(1.5),
             borderColor:colors.ColorBorder(),
          }}>
            <Text style={{
              fontSize: RFPercentage(2.5),
              fontWeight: 'bold'
            }}>Catatan</Text>
            <TextInput style={{
              marginTop:RFPercentage(1),
              height:RFPercentage(2),
              borderColor:this.state.isFocus?colors.ColorPrimary():colors.ColorBorder(),
              borderWidth:2,
              height:RFPercentage(15),
              borderRadius:15,
              padding:RFPercentage(3),
              textAlignVertical:'top',
              elevation:1
            }} onFocus={()=>{
              this.setState({
                isFocus:true
              })
            }}
            onBlur={()=>{
              this.setState({
                isFocus:false
              })
            }} 
            onChangeText={(txt)=>{
              this.setState({
                catatan:txt
              })
            }}/>
          </View>
          {btn.Btn('Tambahkan Ke Keranjang')}
        </View>
      </ScrollView>
      </KeyboardAwareScrollView>
    );
  }

  RenderDetailLayanan(txt) {
    return (
      <Text style={{
        fontSize: RFPercentage(2),
        color: colors.ColorGraySecondary(),
        fontWeight: 'bold',
        marginBottom: RFPercentage(1)
      }}>- {txt}</Text>
    )
  }
}

export default order;
