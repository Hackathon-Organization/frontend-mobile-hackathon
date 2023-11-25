import { useState, useCallback, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  RefreshControl,
  Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import timeServices from "../../services/times";
const TimeDetail = ({ route }) => {
  const timeId = route.params.time;

  const [time, setTime] = useState({
    id: "",
  });

  const fetchTime = async () => {
    console.log(timeId);
    const data = await timeServices.getTimeById(timeId);
    console.log(data);
    setTime(data);
  };

  useEffect(() => {
    fetchTime();
  }, [timeId]);

  return (
    <LinearGradient
      colors={["rgb(1,32,48)", "rgba(110,125,230,1)", "rgba(255,255,255,1)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.TitleComponent}>
        <Text style={{ color: "rgba(255,255,255,1)", fontSize: 30 }}>
          {time.nome}
        </Text>
      </View>
      <View style={styles.InfoComponent}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "rgba(255,255,255,1)", fontSize: 20 }}>
            Participantes
          </Text>
          <Text>{time.membro1}</Text>
          <Text>{time.membro2}</Text>
          <Text>{time.membro3}</Text>
          <Text>{time.membro4}</Text>
          <Text>{time.membro5}</Text>
        </View>
        <View>
          <Text style={{ color: "rgba(255,255,255,1)", fontSize: 20}}>
            Projetos
          </Text>
          <Text>Em andamento</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    padding: 10,
    alignItems: "center",
  },
  TitleComponent: {
    alignItems: "center",
    justifyContent: "center",
    width: "auto",
    height: "10%",
    backgroundColor: "#013956",
    padding: 10,
    borderRadius: 10,
  },
  InfoComponent: {
    alignItems: "center",
    width: "80%",
    height: "auto",
    backgroundColor: "#013956",
    padding: 10,
    borderRadius: 10,
    display: "flex",
    marginTop: 10,
  },
});

export default TimeDetail;
