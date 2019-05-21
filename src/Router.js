import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./containers/Home";
import BoardGameScreen from "./containers/BoardGame";
import BoardGameListScreen from "./containers/BoardGameList";
import SearchScreen from "./containers/Search";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Boardgame: BoardGameScreen,
    BoardgameList: BoardGameListScreen,
    Search: SearchScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      header: null,
    },
  }
);

export default createAppContainer(AppNavigator);
