import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import colors from "../colors/colors";

const ButtonMasukGoogle = (props) => {
  const { marginTop, onPress } = props;

  return (
    <TouchableOpacity
      style={{
        width: "100%",
        marginTop: marginTop,
        height: RFPercentage(8.5),
        backgroundColor: colors.ColorWhite(),
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1.5,
        borderColor: colors.ColorSecondary(),
        borderRadius: 10,
        elevation: 3,
        flexDirection: "row",
      }}
      onPress={onPress}
    >
      <View
        style={{
          height: RFPercentage(3),
          width: RFPercentage(3),
          marginRight: 12,
        }}
      >
        <Image
          style={{ height: undefined, width: undefined, flex: 1 }}
          source={require("../assets/icons/ic_google.png")}
        />
      </View>
      <Text
        style={{
          fontSize: RFPercentage(2.5),
          color: colors.ColorBlack(),
        }}
      >
        Masuk dengan Google
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonMasukGoogle;
