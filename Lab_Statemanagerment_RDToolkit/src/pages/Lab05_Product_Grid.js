import { StyleSheet, View, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { ProductApi } from "../api/product.api";
import { Item_GridView } from "../components/Item_GridView";
import { Ionicons } from "@expo/vector-icons";
import { dataExample } from "../../assets/data";

export const Product_Grid = ({ navigation, route }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // ProductApi.getProducts().then((data) => {
    //   setProducts(data);
    // });
    setProducts(dataExample);
  }, []);
  useEffect(() => {
    navigation.setOptions({
      title: "Chat",
      headerTitleAlign: "center",
      headerTitleStyle: {
        color: "white",
        fontSize: 24,
      },
      headerStyle: {
        backgroundColor: "#1BA9FF",
      },
      headerLeft: () => (
        <Ionicons
          name="arrow-back"
          size={24}
          color="white"
          onPress={() => navigation.goBack()}
          style={{ marginLeft: 15 }}
        />
      ),
      headerRight: () => (
        <Ionicons
          name="cart"
          size={24}
          color="white"
          onPress={() => console.log("Go to cart")}
          style={{ marginRight: 15 }}
        />
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Item_GridView item={item} />}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
