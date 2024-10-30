import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginPage } from "./src/pages/LoginPage";
import { HomePage } from "./src/pages/HomePage";
import TaskHandle from "./src/pages/TaskHandle";
import "@expo/metro-runtime";
import { RecoilRoot } from "recoil";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginPage}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="TaskHandle" component={TaskHandle} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}
