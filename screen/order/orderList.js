import React, { Component } from 'react';
import { View, Text } from 'react-native';


class notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{
          justifyContent:"center",
          alignItems:"center"
      }}>
        <Text>Notifications</Text>
      </View>
    );
  }
}

export default notifications;
