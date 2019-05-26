import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { Constants } from "expo";

const Screen = ({ children }) => {
  return (
    <View style={ { flex: 1, paddingTop: Constants.statusBarHeight } }>
      { children }
    </View>
  );
};

Screen.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Screen;
