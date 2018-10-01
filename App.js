import React, { Component } from "react";

import { Drawer } from "./src/config/navigation";
import { observable } from "mobx";
import { Provider, observer } from "mobx-react";
import Store from "./src/Store";

@observer
export default class App extends Component {
  @observable
  render() {
    return (
      <Provider {...Store}>
        <Drawer />
      </Provider>
    );
  }
}
