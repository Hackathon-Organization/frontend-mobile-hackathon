import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./src/views/home/index";
import RankingScreen from "./src/views/ranking/index";
import TimesScreen from "./src/views/times/index";
import EdicoesScreen from "./src/views/edicoes/index";

const ButtonTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ButtonTab.Navigator>
        <ButtonTab.Screen name="Home" component={HomeScreen} />
        <ButtonTab.Screen name="Ranking" component={RankingScreen} />
        <ButtonTab.Screen name="Times" component={TimesScreen} />
        <ButtonTab.Screen name="Edições" component={EdicoesScreen} />
      </ButtonTab.Navigator>
    </NavigationContainer>
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
