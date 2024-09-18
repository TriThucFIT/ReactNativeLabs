import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useState, useEffect } from "react";
import { listProduct } from "../../data";

export const Home = ({ navigation, route }) => {
  const initialState = listProduct[0];
  const [product, setProduct] = useState(initialState);
  const color = route.params?.color;

  useEffect(() => {
    if (color) {
      const newProduct = listProduct.find((item) => item.colorName === color);
      setProduct(newProduct);
    }
  }, [color]); 

  return (
    <View style={styles.container}>
      <View style={styles.ProductImage}>
        <Image style={{ width: 300, height: 360 }} source={product.image} />
      </View>
      <View style={styles.ProductInfo}>
        <Text style={styles.ProductName}>{product.name}</Text>
        <View style={styles.ProductRating}>
          {Array.from({ length: product.rating }).map((_, index) => (
            <Image
              key={index}
              source={require("../../assets/star.png")}
              style={{ width: 30, height: 35, marginRight: 5 }}
            />
          ))}
          <Text style={styles.ProductRatingCount}>
            (Xem thêm {product.ratingCount} đánh giá )
          </Text>
        </View>
        <View style={styles.Price}>
          <Text style={styles.ProductPrice}>{product.price} đ</Text>
          <Text style={styles.ProductPriceDiscount}>{product.price} đ</Text>
        </View>
        <Text style={styles.sologan}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
      </View>
      <View style={styles.buttons}>
        <Pressable
          onPress={() => {
            navigation.navigate("SelectColor", {
              product,
            });
          }}
          style={styles.btn_SelectColor}
        >
          <Text style={styles.buttonSelectText}>4 màu - Chọn màu </Text>
        </Pressable>
        <Pressable style={styles.btn_order}>
          <Text style={styles.buttonOrderText}>CHỌN MUA</Text>
        </Pressable>
      </View>
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
  ProductImage: {
    width: "100%",
    height: "50%",
    marginTop: 20,

    justifyContent: "center",
    alignItems: "center",
  },
  ProductInfo: {
    width: "100%",
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  ProductName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  Price: {
    flexDirection: "row",
    marginVertical: 10,
  },
  ProductPrice: {
    fontSize: 28,
    fontWeight: "bold",
  },
  ProductPriceDiscount: {
    textDecorationLine: "line-through",
    fontSize: 20,
    color: "gray",
    fontWeight: "bold",
    marginLeft: 60,
  },
  ProductColor: {
    fontSize: 16,
    fontWeight: "bold",
  },
  ProductRating: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  ProductRatingCount: {
    fontSize: 16,
    marginLeft: 10,
  },
  buttons: {
    width: "100%",
    alignItems: "center",
  },
  btn_SelectColor: {
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 15,
    width: "90%",
    marginBottom: 50,
  },
  btn_order: {
    backgroundColor: "#EE0A0A",
    borderRadius: 20,
    width: "90%",
    paddingVertical: 20,
  },
  buttonSelectText: {
    color: "black",
    textAlign: "center",
    fontSize: 20,
  },
  buttonOrderText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },

  sologan: {
    fontSize: 20,
    color: "red",
    fontWeight: "bold",
    marginVertical: 10,
  },
});
