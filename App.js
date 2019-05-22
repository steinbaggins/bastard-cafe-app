import React, { Component } from "react";
import { useScreens } from "react-native-screens";
import { AppLoading, Font } from "expo";
import { Feather } from "@expo/vector-icons";
import Router from "./src/Router";
import Cubano from "./assets/cubano-regular.otf";
import Lato from "./assets/lato-regular.ttf";

useScreens();

export default class App extends Component {
  state = {
    assetsCached: false,
  }

  async cacheStaticAssets() {
    const cachedFonts = [
      { Cubano },
      { Lato },
      Feather.font,
    ].map(font => Font.loadAsync(font));
    await Promise.all(cachedFonts);
  }

  render() {
    const { assetsCached } = this.state;
    if (!assetsCached) {
      return (
        <AppLoading
          startAsync={ this.cacheStaticAssets }
          onFinish={ () => this.setState({ assetsCached: true }) }
        />
      );
    }
    return (
      <Router />
    );
  }
}
