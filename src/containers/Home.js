import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, ScrollView, View, TouchableOpacity, ImageBackground, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import Screen from "../components/Screen";
import Event from "../components/Event";
import { DIMENSIONS, COLORS, FONTS } from "../constants";
import MondayMatchup from "../../assets/monday_matchup.jpg";
import MurderousMonday from "../../assets/murderous_monday.jpg";
import TestingTuestday from "../../assets/testing_tuesday.jpg";
import MonthlyKlask from "../../assets/monthly_klask.jpg";
import SeriousSunday from "../../assets/serious_sunday.jpg";
import GuruPresents from "../../assets/guru_presents.jpg";

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
  event: {
    padding: 15,
    width: DIMENSIONS.width * 0.75,
    marginLeft: 15,
    borderRadius: 5,
    overflow: "hidden",
  },
  eventImage: {
    borderRadius: 5,
    backgroundColor: "#000000",
    opacity: 0.75,
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
      <ScrollView>
        <TouchableOpacity
          onPress={ () => {} }
          activeOpacity={ 0.9 }
        >
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
        </TouchableOpacity>
        <View style={ s.card }>
          <Text style={ s.label }>
            Events
          </Text>
        </View>
        <ScrollView
          style={ { top: -10 } }
          showsHorizontalScrollIndicator={ false }
          horizontal
        >
          <Event
            name="Monday Matchup"
            occurrence="Every Monday"
            cover={ MondayMatchup }
          />
          <Event
            name="Murderous Mondays"
            occurrence="Some mondays"
            cover={ MurderousMonday }
          />
          <Event
            name="Testing Tuesdays"
            occurrence="Every Tuesday"
            cover={ TestingTuestday }
          />
          <Event
            name="Guru Presents"
            occurrence="Most Wednesdays"
            cover={ GuruPresents }
          />
          <Event
            name="Monthly Klask"
            occurrence="First Thursday"
            cover={ MonthlyKlask }
            last
          />
          <Event
            name="Serious Sunday"
            occurrence="Some Sundays"
            cover={ SeriousSunday }
            last
          />
        </ScrollView>
        <View style={ s.card }>
          <Text style={ s.label }>
            Discover
          </Text>
          <TouchableOpacity
            onPress={ () => navigation.navigate("Search") }
            activeOpacity={ 0.9 }
          >
            <View style={ s.input }>
              <Feather name="search" size={ 20 } color="gray" />
              <Text style={ s.inputText }>
                Search boardgames by..
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Screen>
  );
};

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Home;
