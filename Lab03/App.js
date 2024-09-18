import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Screen01 } from "./src/pages/Lab01_Screen01";
import { Screen02 } from "./src/pages/Lab01_Screen02";
import { Screen03 } from "./src/pages/Lab01_Screen03.";
import { Screen04 } from "./src/pages/Lab01_Screen04";
import { Screen05 } from "./src/pages/Lab01_Screen05";
import { Screen00 } from "./src/pages/Lab01_Screen00";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Screen01}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Screen00"
          component={Screen00}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Screen02"
          component={Screen02}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Screen03"
          component={Screen03}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Screen04"
          component={Screen04}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Screen05"
          component={Screen05}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
