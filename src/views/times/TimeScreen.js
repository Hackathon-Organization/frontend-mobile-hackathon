import { StatusBar } from "expo-status-bar";
import { useEffect, useState, useCallback } from "react";
import { DataTable, Text } from "react-native-paper";
import {
  ScrollView,
  StyleSheet,
  View,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import timeServices from "../../services/times";
import projetoService from "../../services/projetos";

function TimesList({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const [times, setTimes] = useState([]);

  const fetchTimes = async () => {
    const data = await timeServices.getAllTimes();
    setTimes(data);
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchTimes();
    setRefreshing(false);
  });

  useEffect(() => {
    fetchTimes();
  }, []);

  const [projeto, setProjetos] = useState([]);

  const fetchProjetos = async () => {
    const data = await projetoService.getAllProjetos();
    setProjetos(data);
  };

  useEffect(() => {
    fetchProjetos();
  }, []);

  return (
    <View style={{ flex: 1, width: "75%" }}>
      <DataTable style={styles.table}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              style={{ alignItems: "center" }}
            />
          }
        >
          <DataTable.Header>
            <DataTable.Title style={styles.tableTitle}>
              <Text style={styles.white}>nome</Text>
            </DataTable.Title>
          </DataTable.Header>

          {Array.isArray(times) ? (
            times.map((time, projeto) => (
              <DataTable.Row key={time.id}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("TimeDetail", { time: time.id })
                  }
                >
                  <DataTable.Cell>
                    <Text style={styles.white}>{time.nome}</Text>
                  </DataTable.Cell>
                </TouchableOpacity>
              </DataTable.Row>
            ))
          ) : (
            <Text>Carregando...</Text>
          )}
        </ScrollView>
      </DataTable>
    </View>
  );
}

export default function TimeScreen({ navigation }) {
  return (
    <LinearGradient
      colors={["rgba(1,32,48,1)", "rgba(110,125,230,1)", "rgba(255,255,255,1)"]}
      start={[0, 0]}
      end={[1, 1]}
      style={styles.container}
    >
      <TimesList navigation={navigation} />
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
    width: "100%",
    height: "100%",
    padding: 15,
  },
  table: {
    margin: 10,
    height: "90%",
    width: "100%",
    display: "flex",
    alignContent: "center",
    backgroundColor: "#013956",
    borderRadius: 20,
    color: "white",
  },
  tableTitle: {
    width: "100%",
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
