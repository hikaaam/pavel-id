import React, { Component, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../colors/colors';


import Back from '../../components/backToDevelopment';

const chat = () => {
    const [prev, setPrev] = useState(false);
    const [text, setText] = useState('ASDA');
    const [data, setData] = useState({
        1: {
            msg: text,
            stat: prev,
            user: true
        },
        2: {
            msg: text,
            stat: prev,
            user: true
        }
    });
    
    // sqlite.createDB()

    return (
        <View style={{
            justifyContent: 'space-between',
            flex: 1,
            backgroundColor: colors.ColorBackground(),
            paddingHorizontal: RFPercentage(2)
        }}>
            <KeyboardAwareScrollView>
                {/* {renderChat(data)} */}
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginTop: RFPercentage(6),
                    marginBottom: RFPercentage(1)
                }}>
                    <View style={{
                        backgroundColor: 'lime',
                        width: RFPercentage(7),
                        height: RFPercentage(7),
                        borderRadius: 100,
                        position: 'relative',
                        bottom: RFPercentage(5),
                        borderWidth: 0.3,
                        borderColor: colors.ColorBorder()
                    }}></View>
                    <View style={{
                        backgroundColor: colors.ColorGrayFade(),
                        maxWidth: RFPercentage(35),
                        alignSelf: 'flex-start',
                        paddingHorizontal: RFPercentage(2),
                        paddingVertical: RFPercentage(1.8),
                        borderRadius: 20,
                        borderTopLeftRadius: 0
                        // minWidth:RFPercentage
                    }}>
                        <Text style={{
                            fontSize: RFPercentage(2),
                        }}>halooo</Text>
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    marginTop: RFPercentage(6),
                    marginBottom: RFPercentage(1)
                }}>
                    <View style={{
                        backgroundColor: colors.ColorGrayFade(),
                        maxWidth: RFPercentage(35),
                        alignSelf: 'flex-start',
                        paddingHorizontal: RFPercentage(2),
                        paddingVertical: RFPercentage(1.8),
                        borderRadius: 20,
                        borderTopRightRadius: 0
                        // minWidth:RFPercentage
                    }}>
                        <Text style={{
                            fontSize: RFPercentage(2),
                        }}>Halo Juga Mas bro</Text>
                    </View>
                    <View style={{
                        backgroundColor: colors.ColorPrimary(),
                        width: RFPercentage(7),
                        height: RFPercentage(7),
                        borderRadius: 100,
                        position: 'relative',
                        bottom: RFPercentage(5),
                        borderWidth: 0.3,
                        borderColor: colors.ColorBorder()
                    }}></View>
                </View>
                    <Back />
            </KeyboardAwareScrollView>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <TouchableOpacity activeOpacity={0.5}>
                    <Ionicons name="ios-attach" size={RFPercentage(6)} color={colors.ColorGraySecondary()} />
                </TouchableOpacity>
                <TextInput style={{
                    paddingVertical: RFPercentage(1.5),
                    borderColor: colors.ColorBorder(),
                    paddingHorizontal: RFPercentage(3),
                    marginBottom: RFPercentage(2),
                    borderRadius: 50,
                    width: "75%",
                    borderWidth: 2,
                    fontSize: RFPercentage(2)
                }} placeholder="Type here . . ."
                    multiline={true}
                    keyboardType="default"
                    onChangeText={(input) => {
                        setText(input)
                    }}
                />
                <TouchableOpacity activeOpacity={0.5} onPress={() => {
                    if (data == 'no') {
                        setData({
                            msg: text,
                            stat: prev,
                            user: true
                        })
                    } else {
                        // let val = data;
                        // val.push({
                        //     msg: text,
                        //     stat: prev,
                        //     user: true
                        // })
                        setData({
                            1: {
                                msg: text,
                                stat: prev,
                                user: true
                            },
                            2: {
                                msg: text,
                                stat: prev,
                                user: true
                            }
                        })
                    }
                }}>
                    <Ionicons name="ios-send" size={RFPercentage(4)} color={colors.ColorGraySecondary()} />
                </TouchableOpacity>
            </View>
        </View>
    )
}



const renderKosong = () => {
    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: RFPercentage(4)
        }}>
            <Text style={{
                fontSize: RFPercentage(2.5),
                fontWeight: 'bold',
                color: colors.ColorGraySecondary()
            }}>Belum ada pesan</Text>
        </View>
    )
}

export default chat;
