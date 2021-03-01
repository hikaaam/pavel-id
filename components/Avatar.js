import React, { Component } from "react";
import { Text, View, Image } from "react-native";

const Avatar = ({ source, size, resizeMode, otherStyleProps }) => {
  resizeMode = resizeMode || "contain";
  return (
    <View style={{ borderRadius: 100, width: size, height: size }}>
      <Image
        style={{
          width: "100%",
          height: "100%",
          resizeMode: resizeMode,
          borderRadius: 100,
          ...otherStyleProps,
        }}
        source={source}
      />
    </View>
  );
};

export default Avatar;
