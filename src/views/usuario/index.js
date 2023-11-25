import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";

import UserScreen from "./UserScreen";

const Stack = createStackNavigator();

export default function MainUser({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="UserScreen"
        component={UserScreen}
        navigation={navigation}
      />
    </Stack.Navigator>
  );
}
