import { StatusBar } from "expo-status-bar";
import { useEffect, useState, useCallback } from "react";
import { Card, Text } from "react-native-paper";
import { ScrollView, StyleSheet, View, RefreshControl } from "react-native";

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
        {Array.isArray(times) ? (
          times.map((time) => (
            <Card key={time.id} style={styles.card}>
              <Card.Content>
                <Text>{time.id}</Text>
                <Text>{time.nome}</Text>
              </Card.Content>
            </Card>
          ))
        ) : (
          <Text>Error: times is not an array</Text>
        )}
      </ScrollView>
    </View>
  );
}

export default function TimeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TimesList />
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
});
