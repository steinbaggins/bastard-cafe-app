import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, ImageBackground, TouchableOpacity, View, Text } from "react-native";
import { withNavigation } from "react-navigation";
import { Feather } from "@expo/vector-icons";
import { FONTS, DIMENSIONS } from "../constants";

const s = StyleSheet.create({
  container: {
    padding: 15,
    marginHorizontal: 15,
    borderRadius: 5,
    backgroundColor: "#000000",
    marginBottom: 10,
    height: DIMENSIONS.height / 6,
    justifyContent: "space-between",
  },
  containerImage: {
    borderRadius: 5,
    backgroundColor:
    "#000000",
    opacity: 0.75,
  },
  shelfContainer: {
    alignSelf: "flex-end",
    top: -5,
    right: -5,
  },
  shelfNumber: {
    textAlign: "center",
    color: "#FFFFFF",
    fontFamily: FONTS.display,
    fontSize: 20,
  },
  shelfLabel: {
    textAlign: "center",
    color: "#FFFFFF",
    fontFamily: FONTS.display,
    fontSize: 12,
  },
  gameName: {
    color: "#FFFFFF",
    fontFamily: FONTS.display,
    fontSize: 20,
  },
  tagsContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  tag: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginRight: 10,
  },
  tagLabel: {
    marginLeft: 5,
    color: "#000000",
    fontFamily: FONTS.display,
  },
});

const ListItem = ({ navigation, game }) => {
  return (
    <TouchableOpacity
      onPress={ () => navigation.navigate("Boardgame", { gameId: game.gameId }) }
      activeOpacity={ 0.9 }
    >
      <ImageBackground
        source={ { uri: game.image } }
        style={ s.container }
        imageStyle={ s.containerImage }
      >
        <View style={ s.shelfContainer }>
          <Text style={ s.shelfNumber }>
            { game.comment }
          </Text>
          <Text style={ s.shelfLabel }>
            Shelf
          </Text>
        </View>
        <View>
          <Text numberOfLines={ 1 } style={ s.gameName }>
            { game.name }
          </Text>
          <View style={ s.tagsContainer }>
            <View style={ s.tag }>
              <Feather name="users" size={ 18 } color="#000000" />
              <Text style={ s.tagLabel }>
                { `${ game.minPlayers }-${ game.maxPlayers }` }
              </Text>
            </View>
            <View style={ s.tag }>
              <Feather name="clock" size={ 18 } color="#000000" />
              <Text style={ s.tagLabel }>
                { `${ game.playingTime } min` }
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  game: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default withNavigation(ListItem);
