import React, { Component } from 'react';
import { View, Text } from 'react-native';

class order extends Component {
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
        <Text> order </Text>
      </View>
    );
  }
}

export default order;
