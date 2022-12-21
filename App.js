import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ContextProvider } from "./context/context1/ContextProvider";

import ChildC from "./components/ChildC";

export default function App() {
  return (
    <View style={styles.container}>
      <ContextProvider>
        <ChildC />
      </ContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
