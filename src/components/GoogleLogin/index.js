import React, { Component } from "react";
import { StyleSheet, View, Button } from "react-native";
import { observer, inject } from "mobx-react";
import Login from "./Login";
import Logged from "./Logged";

import Expo from "expo";

@inject("googleLogin")
@observer
export default class GoogleLogin extends Component {
  signIn = async () => {
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId:
          "711201429408-34flhsct5q4ivud8g3s7f2s405jhdqp0.apps.googleusercontent.com",
        //iosClientId: YOUR_CLIENT_ID_HERE,  <-- if you use iOS
        scopes: ["profile", "email"]
      });

      if (result.type === "success") {
        this.props.googleLogin.setSigned();
        this.props.googleLogin.setEmail(result.user.email);
        this.props.googleLogin.setUsername(result.user.name);
        this.props.googleLogin.setID(result.user.id);
      } else {
        console.log("cancelled");
      }
    } catch (e) {
      console.log("asd error", e);
    }
  };

  render() {
    const { data, signed } = this.props.googleLogin;
    return (
      <View style={styles.container}>
        {signed ? (
          <Logged name={data.username} email={data.email} id={data.id} />
        ) : (
          <Login signIn={this.signIn} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
