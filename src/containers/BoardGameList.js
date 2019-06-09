import React from "react";
import { FlatList } from "react-navigation";
import Screen from "../components/Screen";
import TopBar from "../components/TopBar";
import ListItem from "../components/ListItem";
import EmptyList from "../components/EmptyList";

const BoardGameList = () => {
  return (
    <Screen>
      <TopBar title="Found 21 games" />
      <FlatList
        data={ [] }
        renderItem={ ({ item }) => <ListItem game={ item } /> }
        initialNumToRender={ 5 }
        keyExtractor={ item => `${ item.gameId }` }
        ListEmptyComponent={ EmptyList }
        contentContainerStyle={ { flex: 1 } }
      />
    </Screen>
  );
};

export default BoardGameList;
