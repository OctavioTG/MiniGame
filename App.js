import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import StartGame from './src/screens/StartGame'
import GameScreen from './src/screens/GameScreen'
import { useState } from 'react';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    "ComingSoon-Regular": require("./src/assets/fonts/ComingSoon-Regular.ttf")
  })

  const [userNumber, setUserNumber] = useState();

  const handleStartGame = selectedNumber => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGame onStartGame={handleStartGame} />;

  if (userNumber) {
    content = <GameScreen />;
  }

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Header title={"Adivina el N°"} newStyles={styles.headerTitle} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTitle: {
    color: "white",
    fontSize: 22,
    fontFamily: "ComingSoon-Regular",
  }
});
