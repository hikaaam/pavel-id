import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import colors from "../colors/colors";
import IconFontisco from './IconFontisco';

const ButtonMasukGoogle = (props) => {
  const { marginTop, onPress } = props;

  return (
    <TouchableOpacity
      style={[styles.container, { marginTop: marginTop }]}
      onPress={onPress}
    >
      <View style={styles.imageContainer}>
        <IconFontisco
        name="facebook"
        size={RFPercentage(3)}
        color={colors.ColorPrimary()}
        />
      </View>
      <Text
        style={{
          fontSize: RFPercentage(2.5),
          color: colors.ColorBlack(),
        }}
      >
        Masuk dengan Facebook
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: RFPercentage(8.5),
    backgroundColor: colors.ColorWhite(),
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: colors.ColorSecondary(),
    borderRadius: 10,
    elevation: 3,
    flexDirection: "row",
  },
  imageContainer: {
    height: RFPercentage(3),
    width: RFPercentage(3),
    marginRight: 12,
  },
});

export default ButtonMasukGoogle;
