import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";
import { fetchProducts } from "../../redux-toolkit/slice";
import { StyleSheet, View, FlatList, Text } from "react-native";
import {Item_ListView} from "../components/Item_ListView";

export const Product_List = ({ navigation }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const productStatus = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  const reloadProducts = () => {
    dispatch(fetchProducts());
  }

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
          onPress={reloadProducts}
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

  if (productStatus === "loading") {
    return <Text>Loading...</Text>;
  }

  if (productStatus === "failed") {
    return <Text>Error: {error}</Text>;
  }

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
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 16,
    textAlign: "center",
  },
  listView: {
    paddingHorizontal: 16,
  },
});
