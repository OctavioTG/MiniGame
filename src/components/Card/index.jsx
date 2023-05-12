import { View } from "react-native";
import style from "./style";

function Card({ children, otherStyles }) {
  return (
    <View style={{ ...style.container, ...otherStyles }}>{children}</View>
  );
}

export default Card;
