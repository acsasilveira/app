import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {

  const [text, setText] = useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo(a) ao site teste da Acsa!</Text>
      <TextInput
        value = {text}
        style={styles.input}
        placeholder="Escreva aqui seu nome..."
        onChangeText={(text) => {setText(text)}}
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Digite sua idade..."
      ></TextInput>
      <Button
        title={'Clique aqui!'}
        style={styles.button}
      ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 75,
  },
  text: {
    fontSize: 20,
    color: '#000000',
    alignItems: 'center',
  },
  input: {
    fontSize: 15,
    color: '#900000',
    alignItems: 'center',
    marginTop: 5,
  },
  button: {
    alignItems: 'center',
  }
});
