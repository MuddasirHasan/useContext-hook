import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ChildB = () => {
  return (
    <View>
      <Text>ChildB</Text>
    </View>
  );
};

export default ChildB;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
