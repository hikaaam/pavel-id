import React, { Component } from 'react';
import { View, Text } from 'react-native';

//Components
import Header from '../../components/header';
import Back from '../../components/backToDevelopment';
import ButtonBiru from '../../components/ButtonBiru';
import CardViewPromo from '../../components/CardViewPromo';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View>
        <Header />
        {/* {CardViewPromo.Promo("kielinkfoto","Test",true,()=>{})} */}
        {/* {ButtonBiru.Btn("MASUK",()=>{})} */}
        <Back />
      </View>
    );
  }
}

export default Register;
