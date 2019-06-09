import React, { Component } from "react";
import { useScreens } from "react-native-screens";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Feather, Ionicons, FontAwesome } from "@expo/vector-icons";
import Router from "./src/Router";
import Cubano from "./assets/cubano-regular.otf";
import Lato from "./assets/lato-regular.ttf";
import LatoBold from "./assets/lato-bold.ttf";

useScreens();

export default class App extends Component {
  state = {
    assetsCached: false,
  }

  async cacheStaticAssets() {
    const cachedFonts = [
      { Cubano },
      { Lato },
      { LatoBold },
      Feather.font,
      Ionicons.font,
      FontAwesome.font,
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
