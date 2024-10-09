import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Product_List } from "./src/pages/Lab05_Product_List";
import { Product_Grid } from "./src/pages/Lab05_Product_Grid";
import { Ionicons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "black",
          tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: "bold",
          },
          tabBarStyle: {
            backgroundColor: "#1BA9FF",
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "List") {
              iconName = focused ? "list" : "list-outline";
            } else if (route.name === "Grid") {
              iconName = focused ? "grid" : "grid-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="List" component={Product_List} />
        <Tab.Screen name="Grid" component={Product_Grid} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
