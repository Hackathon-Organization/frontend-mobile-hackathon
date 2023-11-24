import { StyleSheet } from "react-native";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./src/views/home/index";
import RankingScreen from "./src/views/ranking/index";
import TimeScreen from "./src/views/times/index";
import EdicoeScreen from "./src/views/edicoes/index";
import LoginScreen from "./src/views/login/index";

const ButtonTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ButtonTab.Navigator>
        <ButtonTab.Screen name="Home" component={HomeScreen} />
        <ButtonTab.Screen name="Ranking" component={RankingScreen} />
        <ButtonTab.Screen name="Times" component={TimeScreen} />
        <ButtonTab.Screen name="Edições" component={EdicoeScreen} />
      </ButtonTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
