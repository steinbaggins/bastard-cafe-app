import React from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity, Text } from "react-native";

const Search = ({ navigation }) => {
  return (
    <View>
      <View>
        <Text>Search</Text>
        <TouchableOpacity onPress={ () => navigation.goBack() }>
          <Text>Go back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

Search.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Search;
