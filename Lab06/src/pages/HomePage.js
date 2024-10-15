import { StyleSheet, View, FlatList, TextInput, Pressable } from "react-native";
import { useState, useEffect, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Card_Info } from "../components/Card_Info";
import { Item_ListView } from "../components/Item_ListView";
import { TaskApi } from "../api/taskList.api";
import { ActivityIndicator } from "react-native";
import removeAccents from 'remove-accents';  

export const HomePage = ({ navigation, route }) => {
  const name = route.params?.name;
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const orinalTasks = useRef(tasks);
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
      headerRight: () => <Card_Info info={name} />,
    });
  }, [navigation]);

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      const taskAPI = new TaskApi();
      const data = await taskAPI.getTaskList();
      setLoading(false);
      setTasks(data);
      orinalTasks.current = data;
    };
    const unsubscribe = navigation.addListener("focus", fetchTasks);

    return unsubscribe;
  }, [navigation, search]);

  useEffect(() => {
    setTasks(() => {
      if (search === "") {
        return orinalTasks.current;
      }
      const searchQuery = removeAccents(search.toLowerCase());
      return orinalTasks.current.filter((task) =>
        removeAccents(task.name.toLowerCase()).includes(searchQuery)
      );
    });
  }, [search]);

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
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <Item_ListView
              key={item.id}
              item={item}
              navigation={navigation}
              onDelete={setTasks}
            />
          )}
          keyExtractor={(item) => item.id}
        />
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
