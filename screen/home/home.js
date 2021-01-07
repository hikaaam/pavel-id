import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';

//CustomComponents
import CompenentHeader from '../../components/header';
import Back from '../../components/backToDevelopment';

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{
        
      }}>
        <CompenentHeader />
        <Text> halo </Text>
      <Back />
      </View>
    );
  }
}

export default home;
