import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import participanteServices from "../../services/participante";

export default function UsuarioScreen({ navigation }) {
  const [participantes, setParticipantes] = useState([]);

  const fetchParticipantes = async () => {
    const data = await participanteServices.getAllParticipantes();
    setParticipantes(data);
  };

  useEffect(() => {
    fetchParticipantes();
  }, []);

  return (
    <LinearGradient
      colors={["rgb(1,32,48)", "rgba(110,125,230,1)", "rgba(255,255,255,1)"]}
      style={styles.conteiner}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View>
        <Text>{participantes.pontuacao}</Text>
        <Text>{participantes.nome}</Text>
        <Text>{participantes.email}</Text>
        <Text>{participantes.equipe_atual}</Text>
        <Text>ola</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});
