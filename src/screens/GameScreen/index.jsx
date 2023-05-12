import { View, Text, Button } from "react-native";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import style from "./style";

function GameScreen() {
  const [currentGuess, setCurrentGuess] = useState()

  useEffect(() => {
    setCurrentGuess(Math.floor(Math.random() * (99 - 1) + 1))
  }, [])
  
  return (
    <View style={style.container}>
      <Text style={style.text}>El openente supone que es: {currentGuess} </Text>
      <Card otherStyles={style.btnCont}>
        <Button title="Menor" />
        <Button title="Mayor" />
      </Card>
    </View>
  );
}

export default GameScreen;
