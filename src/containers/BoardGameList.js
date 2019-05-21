import React from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity, Text } from "react-native";

const BoardGameList = ({ navigation }) => {
  return (
    <View>
      <View>
        <Text>BoardGameList</Text>
        <TouchableOpacity onPress={ () => navigation.goBack() }>
          <Text>Go back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

BoardGameList.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default BoardGameList;
