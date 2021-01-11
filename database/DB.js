import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class DB extends Component {

    createData = async (key, value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem(key, jsonValue)
        } catch (e) {
            console.log(e);
        }
    }

    // storeData = async (key, value) => {
    //     AsyncStorage.getItem(key).then((data) => data.json()).then((data) => {
    //         try {
    //             data.push(value);
    //             const jsonValue = JSON.stringify(data)
    //             await AsyncStorage.setItem(key, jsonValue)
    //         } catch (e) {
    //             console.log(e);
    //         }
    //     }).catch((e)=>{
    //         console.log(e)
    //     })

    // }

    //use promise or not work
    getData = async (key) => {
        try {
            const value = await AsyncStorage.getItem(key)
            if (value !== null) {
                return value;
            }
        } catch (e) {
            console.log(e)
        }
    }

    removeData = async (key) =>{
        AsyncStorage.removeItem(key)
        console.log(key+" Deleted")
    }



}
const db = new DB();
export default db;
