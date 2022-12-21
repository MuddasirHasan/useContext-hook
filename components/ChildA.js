import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ChildA = () => {
  return (
    <View>
      <Text>ChildA</Text>
    </View>
  );
};

export default ChildA;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
