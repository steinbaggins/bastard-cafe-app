import React from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity, Text } from "react-native";
import Screen from "../components/Screen";
import MOCK_DATA from "../../mock_data.json";

const BoardGame = ({ navigation }) => {
  const game = MOCK_DATA.find(x => x.gameId === navigation.getParam("gameId"));
  return (
    <Screen padding>
      <View>
        <Text>
          Boardgame
        </Text>
        <Text>
          { game.name }
        </Text>
        <TouchableOpacity onPress={ () => navigation.goBack() }>
          <Text>Go back</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

BoardGame.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default BoardGame;
