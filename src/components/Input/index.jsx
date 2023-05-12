import React from "react";
import { TextInput } from "react-native";
import style from "./style";

const Input = ({ newStyle, ...restProps }) => {
  return <TextInput style={{ ...style.input, ...newStyle }} {...restProps} />;
};

export default Input;
