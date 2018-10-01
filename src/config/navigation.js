import React from "react";
import HomePage from "../screens/HomePage";
import GoogleLoginPage from "../screens/GoogleLoginPage";
import NatificationPage from "../screens/NatificationPage";
import { createDrawerNavigator } from "react-navigation";

export const Drawer = createDrawerNavigator({
  Home: HomePage,
  Notifications: NatificationPage,
  GoogleLogin: GoogleLoginPage
});
