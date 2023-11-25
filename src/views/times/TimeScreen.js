import { StatusBar } from "expo-status-bar";
import { useEffect, useState, useCallback } from "react";
import { DataTable, Text } from "react-native-paper";
import { ScrollView, StyleSheet, View, RefreshControl } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import TimeServices from "../../services/times";

function TimesList() {
  const [refreshing, setRefreshing] = useState(false);
  const [times, setTimes] = useState([]);

  const fetchTimes = async () => {
    const data = await TimeServices.getAllTimes();
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
              <Text style={styles.white}>nome</Text>
            </DataTable.Title>
            <DataTable.Title style={styles.tableTitle}>
              <Text style={{ color: "rgba(255,255,255,1)", fontSize: 20 }}>
                Projeto
              </Text>
            </DataTable.Title>
          </DataTable.Header>

          {Array.isArray(times) ? (
            times.map((time) => (
              <DataTable.Row key={time.id}>
                <DataTable.Cell>
                  <Text style={styles.white}>{time.nome}</Text>
                </DataTable.Cell>
                <DataTable.Cell>
                  <Text style={{ color: "rgba(255,255,255,1)", fontSize: 20 }}>
                    {time.projeto.name}
                  </Text>
                </DataTable.Cell>
              </DataTable.Row>
            ))
          ) : (
            <Text>Carregando...</Text>
          )}
        </DataTable>
      </ScrollView>
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
      <TimesList />
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
    padding: 10,
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
