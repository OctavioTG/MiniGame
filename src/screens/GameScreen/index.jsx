import { View, Text, Button } from "react-native";
import { useEffect, useState } from "react";

function GameScreen() {
  const [currentGuess, setCurrentGuess] = useState()

  useEffect(() => {
    setCurrentGuess(Math.floor(Math.random() * (99 - 1) + 1))
  }, [])
  
  return (
    <View>
      <Text>El openente supone que es: {currentGuess} </Text>
      <View>
        <Button title="Menor" />
        <Button title="Mayor" />
      </View>
    </View>
  );
}

export default GameScreen;
