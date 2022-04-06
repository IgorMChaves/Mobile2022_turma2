import React from "react";
import { View, Text, TextInput, KeyboardAvoidingView } from "react-native";
import { Entypo, Foundation } from '@expo/vector-icons'; 
import Button from "../../components/button";


export default function Login() {
  async function handleSignIn() {
    console.log("Login");
  }

  return (
    <View>
      <KeyboardAvoidingView>
        <Text>Login</Text>
        <View>
            <Entypo name="email" size={24} color="black" />
            <TextInput
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
            />
        </View>
        <View>
            <Foundation name="key" size={24} color="black" />
            <TextInput
                placeholder="Senha"
                secureTextEntry={true}
                autoCapitalize="none"
            />
        </View>
        <Button title="Login" type="green" onPress={handleSignIn} />
        <Button title="Cadastre-se" type="purple" onPress={handleSignIn} />
      </KeyboardAvoidingView>
    </View>
  );
}