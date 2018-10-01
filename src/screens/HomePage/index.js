import React, { Component } from "react";
import { Container } from "native-base";

import { observer, inject } from "mobx-react";

import Header from "../../components/Header";

import { Paragraph, Button, Divider } from "react-native-paper";

@inject("counter")
@inject("name")
@observer
export default class HomePage extends Component {
  render() {
    const { counter, name } = this.props;
    return (
      <Container>
        <Header
          title={"Home !"}
          onBackButton={() => this.props.navigation.goBack()}
          onPressMenu={() => this.props.navigation.openDrawer()}
        />
        <Paragraph>{name.data}</Paragraph>
        <Paragraph>{counter.data}</Paragraph>
        <Button mode={"contained"} onPress={() => counter.increment()}>
          Add!
        </Button>
        <Divider />
        <Button mode={"contained"} onPress={() => counter.decrement()}>
          Decrement
        </Button>
      </Container>
    );
  }
}
