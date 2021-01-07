import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

//import screen
import ScreenHome from '../screen/home/home/';
import ScreenKeranjang from '../screen/keranjang/keranjang';
import ScreenOrder from '../screen/order/order';
import ScreenProfile from '../screen/profile/profile';
import ScreenFeed from '../screen/feed/feed';
import ScreenDevelopment from '../screen/development/development';
import ScreenLogin from '../screen/Login/Login';
import ScreenRegister from '../screen/Login/Register';


//Colors
import Colors from '../colors/colors';
import { RFPercentage } from 'react-native-responsive-fontsize';

const Stack = createStackNavigator();

class stackNavigator {

    Navigator = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Development" options={{

                }} component={ScreenDevelopment} />

                <Stack.Screen name="Home" options={{
                    headerStyle: Style.HeaderBiruNavigation,
                    headerTitleStyle: Style.HeaderBiruTitleNavigation,
                    title: "Pavel Clean"

                }} component={ScreenHome} />

                <Stack.Screen name="Order" options={{

                }} component={ScreenOrder} />


                <Stack.Screen name="Keranjang" options={{

                }} component={ScreenKeranjang} />

                <Stack.Screen name="Profile" options={{

                }} component={ScreenProfile} />

                <Stack.Screen name="Feed" options={{

                }} component={ScreenFeed} />

                <Stack.Screen name="Login" options={{

                }} component={ScreenLogin} />

                <Stack.Screen name="Register" options={{
                     headerStyle: Style.HeaderBiruNavigation,
                     headerTitleStyle: Style.HeaderBiruTitleNavigation,
                     title: null
                }} component={ScreenRegister} />


            </Stack.Navigator>
        )
    }
}

const Style = StyleSheet.create({
    HeaderBiruNavigation: {
        backgroundColor: Colors.ColorPrimary(),
        elevation: 0
    },
    HeaderBiruTitleNavigation: {
        color: "white",
        fontSize: RFPercentage(2.9)
    }
})

const Nav = new stackNavigator();
export default Nav;
