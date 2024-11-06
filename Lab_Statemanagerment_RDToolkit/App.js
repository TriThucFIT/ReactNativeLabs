import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Product_List } from "./src/pages/Lab05_Product_List";
import { Product_Grid } from "./src/pages/Lab05_Product_Grid";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { store } from "./redux-toolkit/store";
import AdminCreateProduct from "./src/pages/AdminCreateProduct";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
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
              } else if (route.name === "Admin") {
                iconName = focused ? "grid" : "grid-outline";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="List" component={Product_List} />
          <Tab.Screen name="Admin" component={AdminCreateProduct} />
          {/* <Tab.Screen name="Grid" component={Product_Grid} /> */}
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
