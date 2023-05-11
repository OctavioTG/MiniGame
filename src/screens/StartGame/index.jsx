import { useState } from "react";
import {
  View,
  Text,
  Button,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";

function StartGame() {
  const [value, setValue] = useState("");

  const handleInput = (text) => {
    setValue(text.replace(/[^0-9]/g, ""));
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={"padding"}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View>
          <Text>Elija un N°</Text>
          <Input
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="numeric"
            maxLength={2}
            placeholder="Elija un N°"
            value={value}
            onChangeText={handleInput}
          />
          <View>
            <View>
              <Button title="Limpiar" />
            </View>
            <View>
              <Button title="Confirmar" />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default StartGame;
