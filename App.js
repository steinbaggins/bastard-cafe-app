import React, { Component } from "react";
import { useScreens } from "react-native-screens";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { Feather, Ionicons, FontAwesome } from "@expo/vector-icons";
import Router from "./src/Router";
// FONT ASSETS
import Cubano from "./assets/cubano-regular.otf";
import Lato from "./assets/lato-regular.ttf";
import LatoBold from "./assets/lato-bold.ttf";
// IMAGE ASSETS
import EventMondayMatchup from "./assets/monday_matchup.jpg";
import EventMurderousMonday from "./assets/murderous_monday.jpg";
import TestingTuesday from "./assets/testing_tuesday.jpg";
import GuruPresents from "./assets/guru_presents.jpg";
import MonthlyKlask from "./assets/monthly_klask.jpg";
import SeriousSunday from "./assets/serious_sunday.jpg";

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

    const cachedImages = [
      EventMondayMatchup,
      EventMurderousMonday,
      TestingTuesday,
      GuruPresents,
      MonthlyKlask,
      SeriousSunday,
    ].map(image => Asset.loadAsync(image));

    await Promise.all([...cachedFonts, ...cachedImages]);
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
