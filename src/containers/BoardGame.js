import React from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity, Text } from "react-native";

const BoardGame = ({ navigation }) => {
  return (
    <View>
      <View>
        <Text>Boardgame</Text>
        <TouchableOpacity onPress={ () => navigation.goBack() }>
          <Text>Go back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

BoardGame.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default BoardGame;
