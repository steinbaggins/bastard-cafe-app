import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { withNavigation } from "react-navigation";
import { Constants } from "expo";
import { FontAwesome } from "@expo/vector-icons";

const s = StyleSheet.create({
  container: {
    padding: 15,
    paddingTop: Constants.statusBarHeight + 15,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontFamily: "Cubano",
    marginLeft: 15,
    fontSize: 15,
  },
});

const TopBar = ({ navigation, title }) => {
  return (
    <View style={ s.container }>
      <TouchableOpacity
        onPress={ () => navigation.goBack() }
        hitSlop={ { top: 20, right: 20, bottom: 20, left: 20 } }
      >
        <FontAwesome name="long-arrow-left" size={ 20 } />
      </TouchableOpacity>
      <Text style={ s.title }>
        { title }
      </Text>
    </View>
  );
};

TopBar.propTypes = {
  navigation: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default withNavigation(TopBar);
