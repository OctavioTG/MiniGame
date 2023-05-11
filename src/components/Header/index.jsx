import React from "react";
import { View, Text } from "react-native";
import style from "./style";

function Header({ title, newStyles }) {
  return (
    <View style={style.header}>
      <Text style={{...style.title, ...newStyles}}>{title}</Text>
    </View>
  );
}

export default Header;
