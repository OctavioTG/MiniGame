import { useState } from "react";
import {
  View,
  Text,
  Button,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import Input from "../../components/Input";
import Card from "../../components/Card";
import style from "./styles";

function StartGame({ onStartGame }) {
  const [value, setValue] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [selecNumber, setSelecNumber] = useState();

  const handleInput = (text) => {
    setValue(text.replace(/[^0-9]/g, ""));
  };

  const cleanInput = () => {
    setValue("");
    setConfirm(false);
  };

  const confirmBtn = () => {
    const newValue = parseInt(value);
    if (isNaN(newValue) || newValue <= 0) return;

    setConfirm(true);
    setSelecNumber(newValue);
    setValue("");
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={"padding"}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View>
          <Card>
            <Text style={style.text}>Elija un N°</Text>
            <Input
              blurOnSubmit
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="numeric"
              maxLength={2}
              placeholder="Escriba su N°..."
              value={value}
              onChangeText={handleInput}
            />
            <View>
              <View style={style.btnCont}>
                <Button title="Limpiar" onPress={cleanInput} />
                <Button title="Confirmar" onPress={confirmBtn} />
              </View>
            </View>
          </Card>
          {confirm && (
            <View>
              <Card otherStyles={style.container}>
              <Text style={style.text}>Tu N° es: {selecNumber} </Text>
              <View style={style.btnCont}>
                <Button
                  title="Start Game"
                  onPress={() => onStartGame(selecNumber)}
                ></Button>
              </View>
              </Card>
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default StartGame;
