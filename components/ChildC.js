import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import MyContext from "../context/context1/MyContext";
const ChildC = () => {
  const receiver = useContext(MyContext);
  return (
    <View style={styles.container}>
      <Text>I am in Child C Component {receiver.name} </Text>
      <Text>I am in Child C Component {receiver.age} </Text>
    </View>
  );
};

export default ChildC;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
