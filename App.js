import React, { Component } from "react";

import { Drawer } from "./src/config/navigation";
import { observable } from "mobx";
import { Provider, observer } from "mobx-react";
import store from "./src/store";

@observer
export default class App extends Component {
  @observable
  render() {
    return (
      <Provider {...store}>
        <Drawer />
      </Provider>
    );
  }
}
