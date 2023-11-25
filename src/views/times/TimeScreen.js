import { StatusBar } from "expo-status-bar";
import { useEffect, useState, useCallback } from "react";
import { Card } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";

import TimeServices from "../../services/times";

function TimesList() {
  const [times, setTimes] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fe

}


export default function TimeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Times</Text>
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