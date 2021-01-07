import React, { Component } from 'react';
import { View, Text,TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

class development extends Component {
  constructor(props) {
    super(props);
    this.state = {
        screen:["Home","Login","Register","Feed","Keranjang","Profile","Order"]
    };
  }

  renderScreen(data){
     return data.map((item,i)=>{
        return (
            <TouchableOpacity style={{
                backgroundColor:"tomato",
                width:"100%",
                marginVertical:RFPercentage(1),
                justifyContent:'center',
                paddingHorizontal:RFPercentage(2),
                paddingVertical:RFPercentage(1)
            }} onPress={()=>{
                this.props.navigation.replace(item)
            }}>
                <Text style={{
                    fontSize:RFPercentage(2.2),
                    color:"#fff",
                    fontWeight:"bold"
                }}>
                    {i+1}. {item}
                </Text>
            </TouchableOpacity>
        )
      })
  }

  render() {
    return (
      <ScrollView style={{
        paddingHorizontal:RFPercentage(3),
    }}>
          {this.renderScreen(this.state.screen)}
      </ScrollView>
    );
  }
}

export default development;
