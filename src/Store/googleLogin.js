import { observable, action } from "mobx";

export default class GoogleLogin {
  @observable
  data = {
    id: "",
    username: "",
    email: ""
  };

  @observable
  signed = false;

  @action
  setSigned() {
    this.signed = true;
  }

  @action
  setID(id) {
    this.data.id = id;
  }
  @action
  setUsername(username) {
    this.data.username = username;
  }
  @action
  setEmail(email) {
    this.data.email = email;
  }
}
