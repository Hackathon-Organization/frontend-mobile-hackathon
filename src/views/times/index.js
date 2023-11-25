import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";

import TimeScreen from "./TimeScreen";
import TimeDetail from "./TimeDetail";

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
      <Stack.Screen
        name="TimeDetail"
        component={TimeDetail}
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
