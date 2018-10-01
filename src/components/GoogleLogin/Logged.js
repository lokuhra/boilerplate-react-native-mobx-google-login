import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const LoggedInPage = props => (
  <View style={styles.container}>
    <Text style={styles.header}>
      Welcome:
      {props.name}
    </Text>
    <Text style={styles.header}>
      ID:
      {props.id}
    </Text>
    <Text style={styles.header}>
      Email:
      {props.email}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontSize: 25
  }
});

export default LoggedInPage;
