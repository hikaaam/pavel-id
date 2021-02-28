import React, { Component } from "react";
import { Text, View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import IconFontisco from "./IconFontisco";
import Colors from "../colors/colors";
import { version } from "../config";
import { TouchableOpacity } from "react-native-gesture-handler";

const Copyright = () => {
  return (
    <View
      style={{
        // width: "100%",
        // alignItems: "center",
        marginLeft: RFPercentage(2),
      }}
    >
      <View
        style={{
          //   paddingHorizontal: RFPercentage(2),
          //   paddingVertical: RFPercentage(1),
          //   borderWidth: RFPercentage(0.1),
          borderColor: Colors.ColorBorder(),
          //   elevation: 0.1,
          borderRadius: 15,
        }}
      >
        {/* <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: RFPercentage(0.8),
          }}
        >
          <Text>Follow us</Text>
          <TouchableOpacity>
            <IconFontisco
              name="facebook"
              color="black"
              size={RFPercentage(3)}
              style={{ marginHorizontal: RFPercentage(2) }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <IconFontisco
              name="instagram"
              color="black"
              size={RFPercentage(3)}
            />
          </TouchableOpacity>
        </View> */}
        <View
          style={{
            flexDirection: "row",
            // justifyContent: "space-between",
            alignItems: "center",
            marginTop: RFPercentage(4),
            marginBottom: RFPercentage(2),
            //   width: "50%",
          }}
        >
          <IconFontisco
            name="react"
            size={RFPercentage(5)}
            color={Colors.ColorPrimary()}
            style={{ marginRight: RFPercentage(1) }}
          />
          <Text
            style={{
              color: Colors.ColorBlack(),
              fontSize: RFPercentage(2),
              //   fontWeight: "bold",
            }}
          >
            Pavel {version}
          </Text>
          {/* <Text>Powered by React Native</Text> */}
        </View>
      </View>
    </View>
  );
};

export default Copyright;
