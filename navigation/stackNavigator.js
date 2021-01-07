import React, { Component } from 'react';
import { View, Text } from 'react-native';
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

const Stack = createStackNavigator();

class stackNavigator {

    Navigator = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Development" options={{

                }} component={ScreenDevelopment} />

                <Stack.Screen name="Home" options={{

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

                }} component={ScreenRegister} />


            </Stack.Navigator>
        )
    }
}
const Nav = new stackNavigator();
export default Nav;
