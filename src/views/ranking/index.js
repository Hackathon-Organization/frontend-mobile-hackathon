import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";

import RankingScreen from "./RankingScreen";
import ProjetoScreen from "./ProjetoScreen";

const Stack = createStackNavigator();

export default function MainRanking({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="RankingScreen"
        component={RankingScreen}
        navigation={navigation}
      />
      <Stack.Screen
        name="ProjetoScreen"
        component={ProjetoScreen}
        options={{
          headerStyle: {
            backgroundColor: "#012030",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
}
