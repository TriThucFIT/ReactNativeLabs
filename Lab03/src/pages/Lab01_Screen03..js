import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  Dimensions,
  Pressable,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

const { height, width } = Dimensions.get("window");

export const Screen03 = ({ navigation }) => {
  const CELL_COUNT = 6;
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <LinearGradient
      colors={["#C7F4F6", "#D1F4F6", "#E5F4F5", "#E5F4F5", "#00CCF9"]}
      style={styles.container}
    >
      <View style={styles.viewIcon}>
        <Text style={styles.textHeader}>CODE</Text>
      </View>

      <View style={styles.viewText}>
        <Text style={styles.textBody}>
          Enter ontime password sent on +849092605798
        </Text>
      </View>
      <View style={styles.viewTextInput}>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          autoComplete={Platform.select({
            android: "sms-otp",
            default: "one-time-code",
          })}
          testID="my-code-input"
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}
            >
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
      </View>
      <View style={styles.viewButton}>
        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.navigate("Screen04");
          }}
        >
          <Text style={styles.textButton}>NEXT</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  viewIcon: {
    flex: 2.5,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  image: {
    height: height * 0.2,
    width: width * 0.4,
  },

  viewHeader: {
    flex: 1.2,
    alignItems: "center",
    justifyContent: "center",
  },
  textHeader: {
    fontSize: height * 0.1,
    fontWeight: "bold",
  },
  viewText: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textBody: {
    fontWeight: "bold",
    fontSize: height * 0.025,
    textAlign: "center",
    width: width * 0.85,
  },
  viewTextInput: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    width: width * 0.85,
  },
  root: { flex: 1, padding: 20 },
  title: { textAlign: "center", fontSize: 30 },
  codeFieldRoot: {
    marginTop: 20,
    width: width * 0.85,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cell: {
    textAlign: "center",
    textAlignVertical: "center",
    width: height * 0.06,
    height: height * 0.06,
    fontSize: 24,
    borderWidth: 1,
    borderColor: "#00000030",
    borderRadius: 5,
  },
  focusCell: {
    borderColor: "#000",
  },
  viewButton: {
    flex: 2,
    alignItems: "center",
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "#E3C000",
    height: height * 0.06,
    width: width * 0.85,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    fontSize: height * 0.035,
    fontWeight: "bold",
  },
});
