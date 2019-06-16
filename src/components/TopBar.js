import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { withNavigation } from "react-navigation";
import Constants from "expo-constants";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { FONTS } from "../constants";
import { formatPlayerValue, formatTimeValue } from "../utils";

const s = StyleSheet.create({
  container: {
    padding: 15,
    paddingTop: Constants.statusBarHeight + 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontFamily: FONTS.display,
    marginLeft: 15,
    fontSize: 15,
  },
  filterValue: {
    marginLeft: 5,
    fontFamily: FONTS.display,
  },
});

const TopBar = ({ navigation, title, filters }) => {
  return (
    <View style={ s.container }>
      <View style={ s.row }>
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
      {
        filters && (
          <View style={ s.row }>
            <>
              <Feather name="users" size={ 20 } />
              <Text style={ s.filterValue }>
                { formatPlayerValue(filters.players) }
              </Text>
            </>
            <>
              <Feather name="clock" size={ 20 } style={ { marginLeft: 10 } } />
              <Text style={ s.filterValue }>
                { formatTimeValue(filters.time) }
              </Text>
            </>
          </View>
        )
      }
    </View>
  );
};

TopBar.propTypes = {
  navigation: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  filters: PropTypes.object,
};

TopBar.defaultProps = {
  filters: null,
};

export default withNavigation(TopBar);
