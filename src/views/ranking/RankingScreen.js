import { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  RefreshControl,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Card, Text, DataTable } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

import ProjetoServices from "../../services/projetos";

function ProjetosList({ navigation }) {
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
    const projetosOrdenados = projetos.sort(
      (a, b) => b.pontuacao - a.pontuacao
    );
    return projetosOrdenados;
  };

  return (
    <View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <DataTable style={styles.table}>
          <DataTable.Header>
            <DataTable.Title style={styles.tableTitle}>
              <Text style={styles.white}>Projeto</Text>
            </DataTable.Title>
            <DataTable.Title style={styles.tableTitle}>
              <Text style={{ color: "rgba(255,255,255,1)", fontSize: 20 }}>
                descrição
              </Text>
            </DataTable.Title>
            <DataTable.Title numeric style={styles.tableTitle}>
              <Text style={styles.white}>Pontuação</Text>
            </DataTable.Title>
          </DataTable.Header>

          {Array.isArray(projetos) ? (
            rank().map((projeto) => (
              <DataTable.Row key={projeto.id}>
                <DataTable.Cell>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("ProjetoScreen", {
                        projeto: projeto.id,
                      })
                    }
                  >
                    <Text style={styles.white}>{projeto.nome}</Text>
                  </TouchableOpacity>
                </DataTable.Cell>
                <DataTable.Cell>
                  <Text style={{ color: "rgba(255,255,255,1)", fontSize: 20 }}>
                    {projeto.descricao}
                  </Text>
                </DataTable.Cell>
                <DataTable.Cell numeric>
                  <Text style={styles.white}>{projeto.pontuacao}</Text>
                </DataTable.Cell>
              </DataTable.Row>
            ))
          ) : (
            <Text>Error: projetos is not an array</Text>
          )}
        </DataTable>
      </ScrollView>
    </View>
  );
}

export default function RankingScreen({ navigation }) {
  return (
    <LinearGradient
      colors={["rgba(1,32,48,1)", "rgba(255,255,255,1)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <ProjetosList navigation={navigation} />
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  Text: {
    margin: 10,
  },
  card: {
    margin: 10,
    display: "flex",
    backgroundColor: "#013956",
  },
  Text: {
    margin: 10,
    color: "white",
    fontSize: 20,
    justifyContent: "flex-start",
  },
  table: {
    margin: 10,
    height: "auto",
    width: 400,
    display: "flex",
    backgroundColor: "#013956",
    borderRadius: 10,
    color: "white",
  },
  tableTitle: {
    color: "white",
    fontSize: 20,
    margin: 10,
  },
  white: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
