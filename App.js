import { StyleSheet } from "react-native";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/views/home/index";
import RankingScreen from "./src/views/ranking/index";
import TimeScreen from "./src/views/times/index";
import EdicoeScreen from "./src/views/edicoes/index";
import LoginScreen from "./src/views/login/index";
import UsuarioScreen from "./src/views/usuario";

const Stack = createStackNavigator();
const ButtonTab = createBottomTabNavigator();

export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <ButtonTab.Navigator initialRouteName="Login">
        <ButtonTab.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
          navigation={navigation}
        />
        <ButtonTab.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
          navigation={navigation}
        />
        <ButtonTab.Screen
          options={{ headerShown: false }}
          name="Ranking"
          component={RankingScreen}
          navigation={navigation}
        />
        <ButtonTab.Screen
          options={{ headerShown: false }}
          name="Times"
          component={TimeScreen}
          navigation={navigation}
        />
        <ButtonTab.Screen
          options={{ headerShown: false }}
          name="Edições"
          component={EdicoeScreen}
          navigation={navigation}
        />
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
