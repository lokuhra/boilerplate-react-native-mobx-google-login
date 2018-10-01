import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Login = props => (
  <View>
    <Text style={styles.header}>Sign In With Google</Text>
    <Button title="Sign in with Google" onPress={props.signIn} />
  </View>
);

const styles = StyleSheet.create({
  header: {
    fontSize: 25
  }
});

export default Login;
