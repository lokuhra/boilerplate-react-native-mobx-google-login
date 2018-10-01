import React from "react";
import { Appbar } from "react-native-paper";

const Header = props => (
  <Appbar.Header>
    <Appbar.BackAction onPress={props.onBackButton} style={this.showBack} />
    <Appbar.Content title={props.title} />
    <Appbar.Action icon="menu" onPress={props.onPressMenu} />
  </Appbar.Header>
);

export default Header;
