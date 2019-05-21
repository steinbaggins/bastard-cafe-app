import React from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity, Text } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View>
      <View>
        <Text>Home</Text>
        <TouchableOpacity onPress={ () => navigation.navigate("Boardgame") }>
          <Text>Boardgame</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => navigation.navigate("BoardgameList") }>
          <Text>BoardgameList</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => navigation.navigate("Search") }>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Home;
