import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Card_Info } from "../components/Card_Info";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TaskApi } from "../api/taskList.api";
import DateTimePicker from "@react-native-community/datetimepicker";
import { ActivityIndicator } from "react-native";

const TaskHandle = ({ navigation, route }) => {
  const item = route.params?.item;
  const name = route.params?.name;
  const [taskName, setTaskName] = useState(item ? item.name : "");
  const [taskTime, setTime] = useState(item ? new Date(item.time) : new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerLeft: () => <Card_Info info={name} />,
      headerRight: () => (
        <Ionicons
          name="arrow-back"
          size={24}
          color="gray"
          onPress={() => navigation.goBack()}
          style={{ marginLeft: 15 }}
        />
      ),
    });
  }, [navigation]);

  const handleTaskProcess = async () => {
    const taskAPI = new TaskApi();
    setLoading(true);
    if (item) {
      await taskAPI.updateTask({ ...item, name: taskName, time: taskTime });
    } else {
      await taskAPI.createTask({
        name: taskName,
        time: taskTime.getTime(),
        status: false,
      });
    }
    setLoading(false);
    navigation.navigate("Home");
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setTime(currentDate);
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>
          {item ? "UPDATE " : "ADD "} YOUR TASK
        </Text>
      </View>
      <View style={styles.formView}>
        <View style={styles.InputView}>
          <FontAwesome5 name="tasks" size={24} color="gray" />
          <TextInput
            placeholder="Enter your task name"
            placeholderTextColor="gray"
            style={styles.input}
            onChangeText={(text) => setTaskName(text)}
            value={taskName}
          />
        </View>

        <View style={styles.InputView}>
          <Ionicons name="time-outline" size={24} color="black" />
          <TextInput
            placeholder="Enter your task time"
            placeholderTextColor="gray"
            onFocus={() => setShow(!show)}
            value={taskTime.toISOString().split("T")[0]}
            onPress={() => setShow(!show)}
            style={styles.input}
          />
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={taskTime}
              mode={mode}
              is24Hour={true}
              onChange={onChange}
            />
          )}
        </View>
        <View style={styles.ButtonView}>
          <Pressable style={styles.button} onPress={() => handleTaskProcess()}>
            {loading ? (
              <ActivityIndicator size="large" color="white" />
            ) : (
              <Text style={{ color: "white", fontSize: 24 }}>
                Finish <AntDesign name="arrowright" size={24} color="white" />
              </Text>
            )}
          </Pressable>
        </View>
      </View>

      <View style={styles.logoView}>
        <Image
          style={{ width: 200, height: 200 }}
          source={{
            uri: "https://s3-alpha-sig.figma.com/img/4d17/f963/f6ee0953600008083c32857b2d79ab5e?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YiPvQeynV6joYyVajxEkRP~XIRFb8DmujZUYD6U3Yi5lWQq3KxIfiDmToqmlRli3C4CwfMdl9LauuGnKk7u~4JnK1RKP12GP7CLXko3QQTPO7~vM4YTwcmjmQFQt2RHGq0EmB8fs-jZ9noOg200dAA3rQTQ70XoIm91v1zOH~q7ybIr14ZA7as~yPXsUkpLV4TMN~reSmCpbnPu~Vl93qnV-VWpF8BJh0ohOSUaDVl5zpdZLRyEqtw9i0rfvokru~uHO-0LabmaTRIzd3dhkhAeyQsfWZ5nbPIyU9nLZxvuUi8bO6OSWjma-aatpk0DjDRcaqa2LxsrlrTPR4YVmww__",
          }}
        />
      </View>
    </View>
  );
};

export default TaskHandle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    flex: 1 / 5,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  titleText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#00BDD6",
  },
  formView: {
    flex: 3 / 5,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  InputView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    width: "80%",
  },
  input: {
    width: "80%",
    height: 50,
    fontSize: 20,
    marginLeft: 10,
  },
  ButtonView: {
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    zIndex: 50,
    width: "80%",
    height: 50,
    backgroundColor: "#00BDD6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  logoView: {
    flex: 1 / 5,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
