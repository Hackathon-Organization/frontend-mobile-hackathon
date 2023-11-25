import { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, RefreshControl, ScrollView } from "react-native";
import { Card, Text } from "react-native-paper";

import ProjetoServices from "../../services/projetos";

function ProjetosList() {
  const [refreshing, setRefreshing] = useState(false);
  const [projetos, setProjetos] = useState([]);

  const fetchProjetos = async () => {
    const data = await ProjetoServices.getAllProjetos();
    setProjetos(data);
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchProjetos();
    setRefreshing(false);
  });

  useEffect(() => {
    fetchProjetos();
  }, []);

  const rank = () => {
    const projetosOrdenados = projetos.sort((a, b) => b.pontuacao - a.pontuacao);
    return projetosOrdenados;
  }

  return (
    <View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {Array.isArray(projetos) ? (
          rank().map((projeto) => (
            <Card key={projeto.id} style={styles.card}>
              <Card.Content>
                <Text>{projeto.nome}</Text>
                <Text>{projeto.pontuacao}</Text>
              </Card.Content>
            </Card>
          ))
        ) : (
          <Text>Error: projetos is not an array</Text>
        )}
      </ScrollView>
    </View>
  );
}

export default function RankingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ProjetosList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Text: {
    margin: 10,
  },
});
