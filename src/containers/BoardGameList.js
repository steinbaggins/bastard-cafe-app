import React from "react";
import { FlatList } from "react-navigation";
import Screen from "../components/Screen";
import TopBar from "../components/TopBar";
import ListItem from "../components/ListItem";
import EmptyList from "../components/EmptyList";
import MOCK_DATA from "../../mock_data.json";

const BoardGameList = () => {
  return (
    <Screen>
      <TopBar title={ `Found ${ MOCK_DATA.length } games` } />
      <FlatList
        data={ MOCK_DATA }
        renderItem={ ({ item }) => <ListItem game={ item } /> }
        initialNumToRender={ 5 }
        keyExtractor={ item => `${ item.gameId }` }
        ListEmptyComponent={ EmptyList }
        contentContainerStyle={ MOCK_DATA.length === 0 ? { flex: 1 } : null }
      />
    </Screen>
  );
};

export default BoardGameList;
