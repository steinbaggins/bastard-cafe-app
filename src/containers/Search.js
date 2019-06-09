import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, TouchableOpacity, Text, TextInput } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import Slider from "react-native-slider";
import Screen from "../components/Screen";
import { COLORS, FONTS, DIMENSIONS } from "../constants";

const s = StyleSheet.create({
  card: {
    padding: 15,
  },
  group: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontFamily: FONTS.display,
    width: 75,
  },
  value: {
    fontFamily: FONTS.display,
    width: 50,
    textAlign: "right",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    backgroundColor: COLORS.gray,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  inputText: {
    fontFamily: FONTS.textBold,
    width: (DIMENSIONS.width * 0.7) - 30,
    marginLeft: 10,
    fontSize: 14,
    height: 20,
  },
  back: {
    fontFamily: FONTS.display,
  },
  slider: {
    flex: 1,
  },
  button: {
    padding: 15,
    borderRadius: 15,
    backgroundColor: "#000000",
  },
  buttonText: {
    fontFamily: FONTS.display,
    fontSize: 20,
    textAlign: "center",
    color: "#FFFFFF",
  },
});

export default class Search extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  state = {
    players: 0,
    time: 0,
    search: null,
  };

  renderPlayerValue(players) {
    if (!players) return <Ionicons name="md-infinite" size={ 25 } />;
    if (players < 6) return players;
    return `+${ players }`;
  }

  renderTimeValue(time) {
    if (!time) return <Ionicons name="md-infinite" size={ 25 } />;
    if (time < 4) return `${ time - 1 } - ${ time }`;
    return `+${ time - 1 }`;
  }

  render() {
    const { navigation } = this.props;
    const { players, time, search } = this.state;
    return (
      <Screen padding>
        <View style={ [s.card, s.inputContainer] }>
          <View style={ s.input }>
            <Feather name="search" size={ 20 } color="gray" />
            <TextInput
              placeholder="Search boardgames by.."
              placeholderTextColor="gray"
              style={ s.inputText }
              onChangeText={ text => this.setState({ search: text.length > 0 ? text : null }) }
              clearButtonMode="while-editing"
              autoFocus
            />
          </View>
          <TouchableOpacity onPress={ () => navigation.goBack() }>
            <Text style={ s.back }>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={ [s.card, s.group] }>
            <Text style={ s.label }>
              Players
            </Text>
            <Slider
              onValueChange={ value => this.setState({ players: value }) }
              minimumValue={ 0 }
              maximumValue={ 6 }
              step={ 1 }
              style={ s.slider }
              trackStyle={ { height: 3 } }
            />
            <Text style={ s.value }>
              { this.renderPlayerValue(players) }
            </Text>
          </View>

          <View style={ [s.card, s.group] }>
            <Text style={ s.label }>
              Time
            </Text>
            <Slider
              onValueChange={ value => this.setState({ time: value }) }
              minimumValue={ 0 }
              maximumValue={ 4 }
              step={ 1 }
              style={ s.slider }
              trackStyle={ { height: 3 } }
            />
            <Text style={ s.value }>
              { this.renderTimeValue(time) }
            </Text>
          </View>
        </View>
        <View style={ s.card }>
          <TouchableOpacity onPress={ () => navigation.navigate("BoardgameList", { filters: { time, players, search } }) }>
            <View style={ s.button }>
              <Text style={ s.buttonText }>
                Search
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Screen>
    );
  }
}
