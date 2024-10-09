import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginPage } from "./src/pages/LoginPage";
import { HomePage } from "./src/pages/HomePage";
import TaskHandle from "./src/pages/TaskHandle";
const  Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage} 
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="TaskHandle" component={TaskHandle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
