import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";

import LoginScreen from "./LoginScreen";

const Stack = createStackNavigator();

export default function MainLogin({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        options={{ headerShown: false }}
        name="LoginScreen"
        component={LoginScreen}
        navigation={navigation}
      />
    </Stack.Navigator>
  )
}
