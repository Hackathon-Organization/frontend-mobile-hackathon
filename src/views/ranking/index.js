import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";

import RankingScreen from "./RankingScreen";

const Stack = createStackNavigator();

export default function MainRanking({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="RankingScreen"
        component={RankingScreen}
        navigation={navigation}
      />
    </Stack.Navigator>
  );
}
