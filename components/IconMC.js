import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Iconz = ({ name, size, color, style }) => {
  return <Icon style={style} name={name} size={size} color={color} />;
};

export default Iconz;
