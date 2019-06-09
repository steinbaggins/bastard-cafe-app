import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { FONTS } from "../constants";

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontFamily: FONTS.display,
    fontSize: 25,
    textAlign: "center",
    marginTop: 15,
  },
  text: {
    fontFamily: FONTS.text,
    fontSize: 16,
    color: "#BEC2CE",
    textAlign: "center",
    marginTop: 10,
  },
});

const EmptyList = () => {
  return (
    <View style={ s.container }>
      <Feather name="thumbs-down" size={ 80 } />
      <Text style={ s.header }>
        No results found
      </Text>
      <Text style={ s.text }>
        We can&apos;t find any games matching
        { "\n" }
        your search.
      </Text>
    </View>
  );
};

export default EmptyList;
