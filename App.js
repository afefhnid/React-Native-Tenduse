import React, { Component } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./helpers/rootReducer";
import Splash from "./screens/Splash";
import Home from "./screens/Home";
import Details from "./screens/Details";
import Envoi from "./screens/Envoi";
import Suivi from "./screens/Suivi";
import Acceuil from "./screens/Acceuil";
import Profil from "./screens/Profil";
import Search from "./screens/Search";
const store = createStore(rootReducer);

const BottomNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name={"list"} color={tintColor} size={24} />
        ),
      }),
    },
    Search: {
      screen: Search,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name={"search"} color={tintColor} size={24} />
        ),
      }),
    },
    Profil: {
      screen: Profil,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name={"user"} color={tintColor} size={24} />
        ),
      }),
    },
    Acceuil: {
      screen: Acceuil,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name={"home"} color={tintColor} size={24} />
        ),
      }),
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#7766C6",
      inactiveTintColor: "black",
    },
  }
);

const AppNavigator = createStackNavigator(
  {
    Splash: { screen: Splash, navigationOptions: { headerShown: false } },
    Home: {
      screen: BottomNavigator,
      navigationOptions: { headerShown: false },
    },
    Acceuil: { screen: Acceuil, navigationOptions: { headerShown: false } },
    Details: { screen: Details, navigationOptions: { headerShown: false } },
    Envoi: { screen: Envoi, navigationOptions: { headerShown: false } },
    Suivi: { screen: Suivi, navigationOptions: { headerShown: false } },
  },
  {
    initialRouteName: "Splash",
  }
);

const AppContainer = createAppContainer(AppNavigator);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;
