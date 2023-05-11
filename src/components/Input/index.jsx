import React from "react";
import { View, Text } from "react-native";
import style from "./style";
import { TextInput } from "react-native";

function Input({...restProps}) {
  return <TextInput {...restProps} />;
}

export default Input;
