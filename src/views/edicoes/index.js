import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";

import EdicoesScreen from "./EdicoesScreen";

const Stack = createStackNavigator();

export default function MainEdicoes({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="EdicoesScreen"
        component={EdicoesScreen}
        navigation={navigation}
      />
    </Stack.Navigator>
  );
}
