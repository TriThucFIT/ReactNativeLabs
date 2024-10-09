import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import { useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";

export const LoginPage = ({ navigation, route }) => {
  const [name, setName] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.logoView}>
        <Image
          style={{ width: 270, height: 270 }}
          source={{
            uri: "https://s3-alpha-sig.figma.com/img/4d17/f963/f6ee0953600008083c32857b2d79ab5e?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YiPvQeynV6joYyVajxEkRP~XIRFb8DmujZUYD6U3Yi5lWQq3KxIfiDmToqmlRli3C4CwfMdl9LauuGnKk7u~4JnK1RKP12GP7CLXko3QQTPO7~vM4YTwcmjmQFQt2RHGq0EmB8fs-jZ9noOg200dAA3rQTQ70XoIm91v1zOH~q7ybIr14ZA7as~yPXsUkpLV4TMN~reSmCpbnPu~Vl93qnV-VWpF8BJh0ohOSUaDVl5zpdZLRyEqtw9i0rfvokru~uHO-0LabmaTRIzd3dhkhAeyQsfWZ5nbPIyU9nLZxvuUi8bO6OSWjma-aatpk0DjDRcaqa2LxsrlrTPR4YVmww__",
          }}
        />
        <Text style={styles.title}>MANAGE YOUR TASK</Text>
      </View>

      <View style={styles.formView}>
        <View style={styles.InputView}>
          <Feather name="mail" size={24} color="gray" />
          <TextInput
            placeholder="Enter your name"
            placeholderTextColor="gray"
            style={styles.input}
            onChangeText={(text) => setName(text)}
            value={name}
          />
        </View>
        <View style={styles.ButtonView}>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("Home", { name })}
          >
            <Text style={{ color: "white", fontSize: 24 }}>
              Getting Started{" "}
              <AntDesign name="arrowright" size={24} color="white" />
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoView: {
    flex: 1 / 2,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  title: {
    width: 250,
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 50,
    color: "#8353E2",
  },
  formView: {
    flex: 1 / 2,
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  InputView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 15,
  },
  input: {
    width: "80%",
    padding: 10,
    fontSize: 18,
  },
  ButtonView: {
    width: "60%",
  },
  button: {
    width: "100%",
    padding: 10,
    backgroundColor: "#00BDD6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
});
