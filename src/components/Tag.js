import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { FONTS } from "../constants";

const s = StyleSheet.create({
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

const Tag = ({ icon, value, color }) => {
  const backgroundColor = { backgroundColor: `#${ color }` };
  return (
    <View style={ [s.tag, backgroundColor] }>
      <Feather name={ icon } size={ 18 } color="#000000" />
      <Text style={ s.tagLabel }>
        { value }
      </Text>
    </View>
  );
};

Tag.propTypes = {
  icon: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Tag;
