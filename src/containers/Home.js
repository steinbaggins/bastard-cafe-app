import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, TouchableWithoutFeedback, ImageBackground, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import Screen from "../components/Screen";
import { DIMENSIONS, COLORS, FONTS } from "../constants";

const s = StyleSheet.create({
  card: {
    padding: 15,
  },
  gotmStyle: {
    height: DIMENSIONS.height * 0.55,
    justifyContent: "flex-end",
  },
  rounded: {
    borderRadius: 15,
    overflow: "hidden",
  },
  roundedButtom: {
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  header: {
    fontFamily: FONTS.display,
    color: "#FFFFFF",
    fontSize: 40,
    padding: 20,
  },
  label: {
    fontFamily: FONTS.display,
    color: "#141718",
    fontSize: 25,
    marginBottom: 10,
  },
  input: {
    backgroundColor: COLORS.gray,
    borderRadius: 15,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  inputText: {
    fontFamily: FONTS.textBold,
    color: "gray",
    fontWeight: "bold",
    marginLeft: 10,
  },
});

const Home = ({ navigation }) => {
  return (
    <Screen padding>
      <TouchableWithoutFeedback onPress={ () => navigation.navigate("Boardgame", { gameId: 5 }) }>
        <View style={ s.card }>
          <ImageBackground
            source={ { uri: "https://cf.geekdo-images.com/original/img/FaL4MRJ_XR25rRbSbRLFxDyRm4M=/0x0/pic4474567.jpg" } }
            style={ s.gotmStyle }
            imageStyle={ s.rounded }
          >
            <View style={ s.rounded }>
              <LinearGradient
                colors={ ["#00000000", "#000000FF"] }
                style={ s.roundedButtom }
              >
                <Text style={ s.header }>
                  Game
                  { "\n" }
                  of the
                  { "\n" }
                  month
                </Text>
              </LinearGradient>
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
      <View style={ s.card }>
        <Text style={ s.label }>
          Discover
        </Text>
        <TouchableWithoutFeedback onPress={ () => navigation.navigate("Search") }>
          <View style={ s.input }>
            <Feather name="search" size={ 20 } color="gray" />
            <Text style={ s.inputText }>
              Search boardgames by..
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </Screen>
  );
};

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Home;
