import { StyleSheet, View, FlatList, Text, SafeAreaView } from "react-native";
import { useState, useEffect } from "react";
import { ProductApi } from "../api/product.api";
import {Item_ListView} from "../components/Item_ListView";
import { Ionicons } from "@expo/vector-icons";

export const Product_List = ({ navigation, route }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    ProductApi.getProductsList().then((data) => {
      setProducts(data);
    });
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
      <Text style={styles.title}>
        Bạn có thắc mắc về sản phẩm vừa xem? Hãy chat với chúng tôi!
      </Text>

      <FlatList
        style={styles.listView}
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Item_ListView item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  listView: {
    width: "100%",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    color: "#333",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
});
