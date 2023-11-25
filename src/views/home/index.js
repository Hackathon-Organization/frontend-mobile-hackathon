import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";

import HomeScreen from "./HomeScreen";

const Stack = createStackNavigator();

export default function MainLogin({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        options={{ headerShown: false }}
        name="HomeScreen"
        component={HomeScreen}
        navigation={navigation}
      />
    </Stack.Navigator>
  )
}

