import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, TouchableOpacity, ImageBackground, View, Text } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { Feather } from "@expo/vector-icons";
import { DIMENSIONS, FONTS, URLS } from "../constants";

const s = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    marginLeft: 15,
    borderRadius: 5,
    overflow: "hidden",
  },
  event: {
    padding: 15,
    width: DIMENSIONS.width * 0.75,
    borderRadius: 5,
  },
  eventImage: {
    borderRadius: 5,
    backgroundColor: "#000000",
    opacity: 0.75,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontFamily: FONTS.display,
    color: "#ffffff",
  },
});

const Event = ({ name, occurrence, cover, last }) => {
  const condEventStyle = last ? [s.container, { marginRight: 15 }] : s.container;
  return (
    <View style={ condEventStyle }>
      <TouchableOpacity
        onPress={ () => WebBrowser.openBrowserAsync(URLS.events) }
        activeOpacity={ 0.9 }
      >
        <ImageBackground
          source={ cover }
          style={ s.event }
          imageStyle={ s.eventImage }
        >
          <View style={ s.row }>
            <View>
              <Text style={ s.text }>
                { name }
              </Text>
              <Text style={ s.text }>
                { occurrence }
              </Text>
            </View>
            <Feather name="facebook" size={ 30 } color="#ffffff" />
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

Event.propTypes = {
  name: PropTypes.string.isRequired,
  occurrence: PropTypes.string.isRequired,
  cover: PropTypes.number.isRequired,
  last: PropTypes.bool,
};

Event.defaultProps = {
  last: false,
};

export default Event;
