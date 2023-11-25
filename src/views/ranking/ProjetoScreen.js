import { useCallback, useEffect, useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import projetoServices from "../../services/projetos";

const ProjetoScreen = ({ route }) => {
  const projetoId = route.params.projeto;

  const [projeto, setProjetos] = useState({
    id: "",
  });
  const fetchProjetos = async () => {
    const data = await projetoServices.getProjetoById(projetoId);
    setProjetos(data);
  };

  useEffect(() => {
    fetchProjetos();
  }, [projetoId]);

  return (
    <LinearGradient
      colors={["rgb(1,32,48)", "rgba(255,255,255,1)"]}
      style={styles.content}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.titleComponent}>
        <Text style={{ color: "rgba(255,255,255,1)", fontSize: 30 }}>
          {projeto.nome}
        </Text>
      </View>
      <View style={styles.InfoContent}>
        <View style={{ alignItems: "center", margin: 10 }}>
          <Text style={{ color: "rgba(255,255,255,1)", fontSize: 20 }}>
            descrição
          </Text>
          <View>{projeto.descricao}</View>
        </View>
        <View style={{ alignItems: "center", margin: 10 }}>
          <Text style={{ color: "rgba(255,255,255,1)", fontSize: 20 }}>
            Pontuação
          </Text>
          <View>{projeto.pontuacao}</View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  titleComponent: {
    alignItems: "center",
    justifyContent: "center",
    width: "75%",
    height: 50,
    backgroundColor: "#013956",
    margin: 10,
    borderRadius: 10,
    padding: 10,
  },
  InfoContent: {
    alignItems: "center",
    justifyContent: "center",
    width: "75%",
    height: "auto",
    backgroundColor: "#013956",
    borderRadius: 10,
    padding: 10,
  },
});

export default ProjetoScreen;
