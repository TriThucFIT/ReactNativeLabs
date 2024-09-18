import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { listProduct } from "../../data";

export const SelectColor = ({ navigation, route }) => {
  const curentProduct = route.params?.product;
  const [color, setcolor] = useState(curentProduct.colorName);
  const [product, setProduct] = useState(curentProduct);

  return (
    <View style={styles.container}>
      <View style={styles.ProductView}>
        <Image
          style={{ width: "40%", height: "100%" }}
          source={product.image}
        />
        <View style={styles.ProductInfo}>
          <Text style={styles.ProductName}>{product.name}</Text>
          <Text style={styles.ProductColor}>Màu : {product.color}</Text>
          <Text style={styles.ProductColor}>Cung cấp bởi Tiki Tradding</Text>
          <Text style={styles.ProductPrice}>{product.price} đ</Text>
        </View>
      </View>
      <View style={styles.colorView}>
        <Text style={styles.title}>Chọn một màu bên dưới:</Text>

        {listProduct.map((item, index) => (
          <Pressable
            key={index}
            onPress={() => {
              setcolor(item.colorName);
              setProduct(item);
            }}
            style={[
              styles.colorItem,
              { backgroundColor: item.background },
              item.colorName === color
                ? { borderWidth: 3, borderColor: "green" }
                : { borderWidth: 0 },
            ]}
          ></Pressable>
        ))}
        <Pressable
          onPress={() => {
            navigation.navigate("Home", {
              color,
            });
          }}
          style={styles.btn_SelectColor}
        >
          <Text style={styles.buttonSelectText}>Xong</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  ProductView: {
    flexDirection: "row",
    marginTop: 50,
    marginHorizontal: 10,
  },
  ProductInfo: {
    flex: 1,
    marginLeft: 20,
    marginTop: 20,
  },
  ProductName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  ProductColor: {
    fontSize: 18,
    marginBottom: 20,
  },
  ProductPrice: {
    fontSize: 28,
    fontWeight: "bold",
  },
  colorView: {
    height: "100%",
    width: "100%",
    marginTop: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    top: 1,
    left: 10,
  },
  colorItem: {
    width: 100,
    height: 100,
    margin: 20,
  },
  btn_SelectColor: {
    width: "80%",
    height: 50,
    backgroundColor: "#1952E294",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 10,
  },
  buttonSelectText: {
    color: "white",
    fontSize: 28,
  },
});
