import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, ImageBackground, View, TouchableOpacity, Text } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Feather, FontAwesome } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import Screen from "../components/Screen";
import Tag from "../components/Tag";
import { DIMENSIONS, COLORS, FONTS, URLS } from "../constants";
import { formatGameWeight } from "../utils";
import MOCK_DATA from "../../mock_data.json";

const s = StyleSheet.create({
  cover: {
    width: DIMENSIONS.width,
    height: DIMENSIONS.height / 2,
  },
  container: {
    width: DIMENSIONS.width,
    height: (DIMENSIONS.height / 2) + 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: "#ffffff",
    top: -15,
    padding: 15,
    paddingBottom: 0,
  },
  tags: {
    marginBottom: 30,
    flexDirection: "row",
  },
  secondaryInfo: {
    marginHorizontal: -15,
    padding: 15,
    paddingBottom: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: COLORS.gray,
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});

const BoardGame = ({ navigation }) => {
  const game = MOCK_DATA.find(x => x.gameId === navigation.getParam("gameId", 244521));
  const players = `${ game.minPlayers } - ${ game.maxPlayers }`;
  const playingTime = `${ game.playingTime } min`;
  const rating = `${ game.averageRating.toFixed(1) }/10`;
  return (
    <Screen>
      <ImageBackground
        source={ { uri: game.image } }
        style={ s.cover }
      />
      <View style={ s.container }>
        <TouchableOpacity
          onPress={ () => navigation.goBack() }
          hitSlop={ { top: 20, right: 20, bottom: 20, left: 20 } }
          style={ { marginBottom: 15 } }
        >
          <View style={ s.row }>
            <FontAwesome name="long-arrow-left" size={ 20 } />
            <Text style={ { fontFamily: FONTS.display, marginLeft: 10, fontSize: 15 } }>
              Back
            </Text>
          </View>
        </TouchableOpacity>
        <View style={ { marginBottom: 15 } }>
          <Text numberOfLines={ 2 } style={ { fontFamily: FONTS.display, fontSize: 25 } }>
            { game.name }
          </Text>
          <Text style={ { fontFamily: FONTS.display } }>
            By Wolfgang Warsch
          </Text>
        </View>
        <View style={ s.tags }>
          <Tag icon="users" value={ players } color="E7F5FF" />
          <Tag icon="clock" value={ playingTime } color="EBFBEE" />
          <Tag icon="star" value={ rating } color="FFF9DB" />
          <Tag icon="feather" value={ formatGameWeight(3) } color="F8F0FC" />
        </View>
        <SafeAreaView style={ s.secondaryInfo }>
          <Text style={ { fontFamily: FONTS.display, marginBottom: 10 } }>
            Description
          </Text>
          <Text style={ { fontFamily: FONTS.text, fontStyle: "italic" } } numberOfLines={ 5 }>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatum, vero? Ullam, quam. Nisi, excepturi incidunt?
            Totam cum aspernatur dignissimos qui, dicta veritatis porro tenetur?
            Porro et neque facere amet vero?
          </Text>
          <View style={ { alignItems: "center", marginVertical: 10 } }>
            <TouchableOpacity
              style={ [s.row, { paddingVertical: 20 }] }
              onPress={ () => WebBrowser.openBrowserAsync(`${ URLS.bggGame }${ game.gameId }`) }
            >
              <Text style={ { fontFamily: FONTS.display, marginRight: 5 } }>
                More info at BoardGameGeek.com
              </Text>
              <Feather name="external-link" size={ 18 } color="#000000" />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </Screen>
  );
};

BoardGame.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default BoardGame;
