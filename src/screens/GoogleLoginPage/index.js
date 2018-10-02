import React, { Component } from "react";
import Header from "../../components/Header";
import { Container } from "native-base";
import GoogleLogin from "../../components/GoogleLogin";

import { Paragraph } from "react-native-paper";

export default class ChatPage extends Component {
  render() {
    return (
      <Container>
        <Header
          title={"Google Login!"}
          onBackButton={() => this.props.navigation.goBack()}
          onPressMenu={() => this.props.navigation.openDrawer()}
        />
        <Paragraph>Google Login</Paragraph>
        <GoogleLogin />
      </Container>
    );
  }
}
