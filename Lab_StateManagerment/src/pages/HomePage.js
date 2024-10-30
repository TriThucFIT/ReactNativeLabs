import { StyleSheet, View, FlatList, TextInput, Pressable } from "react-native";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Card_Info } from "../components/Card_Info";
import { Item_ListView } from "../components/Item_ListView";
import { ActivityIndicator } from "react-native";
import {
  useRecoilRefresher_UNSTABLE,
  useRecoilValue,
  useRecoilValueLoadable,
} from "recoil";
import { taskListSelector, userLoginState } from "../RecoilState";

export const HomePage = ({ navigation }) => {
  const userLogin = useRecoilValue(userLoginState);

  const tasks = useRecoilValueLoadable(taskListSelector);
  const refreshTask = useRecoilRefresher_UNSTABLE(taskListSelector);
  const [search, setSearch] = useState("");
  useEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerLeft: () => (
        <Ionicons
          name="arrow-back"
          size={24}
          color="gray"
          onPress={() => navigation.goBack()}
          style={{ marginLeft: 15 }}
        />
      ),
      headerRight: () => <Card_Info info={userLogin.user} />,
    });
    navigation.addListener("focus", refreshTask);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.searchView}>
        <Ionicons name="search" size={24} color="gray" />
        <TextInput
          placeholder="Search"
          style={styles.input}
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
      </View>

      {tasks.state === "hasValue" ? (
        <FlatList
          data={tasks.contents}
          renderItem={({ item }) => (
            <Item_ListView
              key={item.id}
              item={item}
              navigation={navigation}
              onDelete={refreshTask}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      ) : tasks.state === "loading" ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          <Text>Failed to load tasks</Text>
          <Pressable onPress={refreshTask}>Retry</Pressable>
        </View>
      )}
      <View style={{ height: 100 }}>
        <Pressable
          style={styles.addTask}
          onPress={() => navigation.navigate("TaskHandle")}
        >
          <Ionicons name="add-circle" size={80} color="green" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchView: {
    flexDirection: "row",
    backgroundColor: "white",
    margin: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  input: {
    width: "90%",
    padding: 10,
    fontSize: 18,
  },
  addTask: {
    justifyContent: "center",
    alignItems: "center",
  },
});
