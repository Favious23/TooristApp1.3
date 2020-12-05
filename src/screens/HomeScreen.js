import React, { memo } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../core/theme";
import SocialButton from '../components/SocialButton';

const HomeScreen = ({ navigation }) => (
  <Background>
    <Logo />
    <Header>Bienvenido</Header>

    <Paragraph>
      La mejor forma de disfrutar tu viaje!
    </Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate("LoginScreen")}>
      Ingresar
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate("RegisterScreen")}
    >
      Registrarse
    </Button>

    <SocialButton 
        buttonTitle="Iniciar con Google"
        btnType="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
        onPress={() => {}}
      />

    <View style={styles.row}>
        <Text style={styles.label}>Quieres trabajar con nosotros? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen2")}>
          <Text style={styles.link}>Entra aqui</Text>
        </TouchableOpacity>
      </View>
  </Background>
);

const styles = StyleSheet.create({
  label: {
    color: theme.colors.secondary
  },
  button: {
    marginTop: 24
  },
  row: {
    flexDirection: "row",
    marginTop: 40
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary
  }
});

export default memo(HomeScreen);
