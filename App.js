import React, { Component } from "react";
import { useScreens } from "react-native-screens";
import Router from "./src/Router";

useScreens();

export default class App extends Component {
  state = {
    assetsCached: false,
  }

  render() {
    return (
      <Router />
    );
  }
}
