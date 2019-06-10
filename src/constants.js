import { Dimensions, PixelRatio } from "react-native";

const { height, width } = Dimensions.get("window");

export const DIMENSIONS = {
  height,
  width,
  ratio: height / width,
  pixel: PixelRatio.get(),
};

export const COLORS = {
  primary: "#EF536D",
  gray: "#ECEFF8",
};

export const FONTS = {
  display: "Cubano",
  text: "Lato",
  textBold: "LatoBold",
};

export const URLS = {
  events: "https://facebook.com/BastardCafe/pages/permalink/?view_type=tab_events",
};
