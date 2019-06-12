import React from "react";
import PropTypes from "prop-types";
import { withNavigation, FlatList } from "react-navigation";
import Screen from "../components/Screen";
import TopBar from "../components/TopBar";
import ListItem from "../components/ListItem";
import EmptyList from "../components/EmptyList";
import MOCK_DATA from "../../mock_data.json";

const BoardGameList = ({ navigation }) => {
  const filters = navigation.getParam("filters");
  const data = filters.players === 6 ? [] : MOCK_DATA;
  return (
    <Screen>
      <TopBar title={ `Found ${ data.length } games` } />
      <FlatList
        data={ data }
        renderItem={ ({ item }) => <ListItem game={ item } /> }
        initialNumToRender={ 5 }
        keyExtractor={ item => `${ item.gameId }` }
        ListEmptyComponent={ EmptyList }
        contentContainerStyle={ data.length === 0 ? { flex: 1 } : null }
      />
    </Screen>
  );
};

BoardGameList.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default withNavigation(BoardGameList);
