import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import Constants from "expo-constants";

const Screen = ({ children, padding }) => {
  const styles = {
    flex: 1,
    paddingTop: padding ? Constants.statusBarHeight : 0,
  };
  return (
    <View style={ styles }>
      { children }
    </View>
  );
};

Screen.propTypes = {
  children: PropTypes.node.isRequired,
  padding: PropTypes.bool,
};

Screen.defaultProps = {
  padding: false,
};

export default Screen;
