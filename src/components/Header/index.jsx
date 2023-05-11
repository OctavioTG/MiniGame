import React from "react";
import { View, Text } from "react-native";
import style from "./style";

function Header({ title }) {
  return (
    <View style={style.header}>
      <Text style={style.title}>{title}</Text>
    </View>
  );
}

export default Header;
