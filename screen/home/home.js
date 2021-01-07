import React, { Component } from 'react';
import { View, Text } from 'react-native';

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{
          flex:1,
          justifyContent:'center',
          alignItems:'center'
      }}>
        <Text> home </Text>
      </View>
    );
  }
}

export default home;
