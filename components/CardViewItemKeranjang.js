import React from "react";
import { View, Text, TouchableOpacity, Image, Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFPercentage } from "react-native-responsive-fontsize";
//color
import colors from "../colors/colors";

const CardViewItemKeranjang = (props) => {
  const { nama, image, jumlah, catatan } = props;

  return (
    <View
      style={{
        backgroundColor: colors.ColorWhite(),
        elevation: 4,
        marginHorizontal: RFPercentage(2),
        marginTop: RFPercentage(1.5),
        borderRadius: 10,
        padding: RFPercentage(1),
      }}
    >
      <View style={{ flexDirection: "row" }}>
        {/* foto barang */}
        <View style={{ width: RFPercentage(11), height: RFPercentage(11) }}>
          <Image
            style={{
              flex: 1,
              height: undefined,
              width: undefined,
              resizeMode: "cover",
              borderRadius: 10,
            }}
            source={{
              uri: image,
            }}
          />
        </View>
        {/* detail barang */}
        <View
          style={{
            left: RFPercentage(1),
            flex: 1,
            width: "100%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "100%",
            }}
          >
            <Text
              style={{
                color: colors.ColorBlack(),
                fontWeight: "600",
                fontSize: RFPercentage(3),
                width: "80%",
                flex: 1,
              }}
            >
              {nama}
            </Text>
            <Pressable
              onPress={() => {
                alert("item dibuang");
              }}
            >
              <Ionicons
                name="trash-outline"
                color={colors.ColorBlack()}
                size={RFPercentage(4)}
                style={{ right: RFPercentage(1) }}
              />
            </Pressable>
          </View>
          {/* jumlah barang */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "white",
            }}
          >
            <Text>Jumlah :</Text>
            <Text
              style={{
                left: RFPercentage(1),
                fontSize: RFPercentage(2.5),
                color: colors.ColorSecondary(),
                fontWeight: "bold",
              }}
            >
              {jumlah}
            </Text>
          </View>
        </View>
      </View>
      {/* catatan */}
      <View
        style={{
          flexDirection: "row",
          borderColor: colors.ColorGrayFade(),
          marginTop: RFPercentage(1),
        }}
      >
        <Text>Catatan :</Text>
        <Text
          numberOfLines={3}
          style={{ paddingLeft: RFPercentage(1), flex: 1, width: "75%" }}
        >
          {catatan}
        </Text>
      </View>
    </View>
  );
};

export default CardViewItemKeranjang;
