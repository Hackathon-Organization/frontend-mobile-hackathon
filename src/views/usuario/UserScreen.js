import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import participanteServices from "../../services/participante";

export default function UsuarioScreen({ navigation }) {
  const [participantes, setParticipantes] = useState([]);

  useEffect(() => {
    participanteServices.getAllParticipantes().then((participantes) => {
      setParticipantes(participantes[0]);
    });
  }, []);

  if (!participantes) {
    return null;
  }

  return (
    <LinearGradient
      colors={["rgb(1,32,48)", "rgba(110,125,230,1)", "rgba(255,255,255,1)"]}
      style={styles.conteiner}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={{ alignItems: "center" }}>
        <View>
          <Text style={{ color: "rgba(255,255,255,1)", fontSize: 30 }}>
            {participantes.pontuacao}
          </Text>
        </View>
        <View>
          <Text style={{ color: "rgba(255,255,255,1)", margin: 10 }}>
            {participantes.nome}
          </Text>
          <Text style={{ color: "rgba(255,255,255,1)", margin: 10 }}>
            {participantes.email}
          </Text>
          <Text style={{ color: "rgba(255,255,255,1)", margin: 10 }}>
            {participantes.equipe_atual}
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 1000,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
