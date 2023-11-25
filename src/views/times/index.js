import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";

import TimeScreen from "./TimeScreen";

const Stack = createStackNavigator();

export default function MainTimes({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="TimeScreen"
        component={TimeScreen}
        navigation={navigation}
      />
    </Stack.Navigator>
  );
}
