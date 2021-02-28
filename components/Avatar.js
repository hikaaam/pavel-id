import React, { Component } from "react";
import { Text, View, Image } from "react-native";


const Avatar = ({
    source,
    size,
    resizeMode,
    otherStyleProps
}) => {
    resizeMode = resizeMode || "contain"
    return (
    
            <Image
                style={{ width: size, height: size, resizeMode:resizeMode,...otherStyleProps }}
                source={source}
            />
    );
}

export default Avatar;
