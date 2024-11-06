import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { createProduct } from "../../redux-toolkit/slice";

const AdminCreateProduct = () => {
  const dispatch = useDispatch();
  const productStatus = useSelector((state) => state.products.status);
  const productError = useSelector((state) => state.products.error);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = () => {
    const newProduct = {
      name,
      price: parseInt(price),
      discount: parseInt(discount),
      image,
    };
    dispatch(createProduct(newProduct));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tạo Sản Phẩm Mới</Text>
      <TextInput
        style={styles.input}
        placeholder="Tên sản phẩm"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Giá"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />
      <TextInput
        style={styles.input}
        placeholder="Giảm giá"
        keyboardType="numeric"
        value={discount}
        onChangeText={setDiscount}
      />
      <TextInput
        style={styles.input}
        placeholder="Link ảnh"
        value={image}
        onChangeText={setImage}
      />
      <Pressable style={styles.btn} onPress={handleSubmit}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
          Tạo sản phẩm
        </Text>
      </Pressable>

      {productStatus === "loading" ? (
        <ActivityIndicator size="large" color="#1BA9FF" />
      ) : productStatus === "succeeded" ? (
        <Text style={styles.success}>Sản phẩm đã được tạo thành công!</Text>
      ) : productStatus === "failed" ? (
        <Text style={styles.error}>Lỗi: {productError}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#1BA9FF",
  },
  input: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  error: {
    textAlign: "center",
    color: "white",
    marginTop: 10,
    padding: 20,
    borderRadius: 20,
    fontWeight: "bold",
    backgroundColor: "red",
  },
  success: {
    textAlign: "center",
    color: "white",
    marginTop: 10,
    padding: 20,
    borderRadius: 20,
    fontWeight: "bold",
    backgroundColor: "green",
  },
  btn: {
    backgroundColor: "#1BA9FF",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
});

export default AdminCreateProduct;
