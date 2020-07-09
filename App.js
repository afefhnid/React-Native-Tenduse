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
import Forgot from "./screens/Forgot";
import Details from "./screens/Details";
import Acceuil from "./screens/Acceuil";
import Profil from "./screens/Profil";
import Register from "./screens/Register";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";
import Search from "./screens/Search";
import Envoi from "./screens/Envoi";
import Suivi from "./screens/Suivi";
import SuiviDetails from "./screens/SuiviDetails";
import { composeWithDevTools } from "redux-devtools-extension";
import Conseils from "./screens/Conseils";
import Addconseil from "./screens/Addconseil";
import ShowConseils from "./screens/ShowConseils";
import Customize from "./screens/Customize";

const store = createStore(
  rootReducer,
  composeWithDevTools()

  // other store enhancers if any
);
const BottomNavigator = createBottomTabNavigator(
  {
    Acceuil: {
      screen: Acceuil,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name={"home"} color={tintColor} size={24} />
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
    Login: { screen: Login, navigationOptions: { headerShown: false } },
    Register: { screen: Register, navigationOptions: { headerShown: false } },
    SignUp: { screen: SignUp, navigationOptions: { headerShown: false } },
    Forgot: { screen: Forgot, navigationOptions: { headerShown: false } },
    Home: {
      screen: BottomNavigator,
      navigationOptions: { headerShown: false },
    },
    Acceuil: { screen: Acceuil, navigationOptions: { headerShown: false } },
    Details: { screen: Details, navigationOptions: { headerShown: false } },
    Envoi: { screen: Envoi, navigationOptions: { headerShown: false } },
    Suivi: { screen: Suivi, navigationOptions: { headerShown: false } },
    SuiviDetails: {
      screen: SuiviDetails,
      navigationOptions: { headerShown: false },
    },
    Conseils: { screen: Conseils, navigationOptions: { headerShown: false } },
    Addconseil: {  screen: Addconseil, navigationOptions: {  headerShown: false  } },
    ShowConseils: {  screen: ShowConseils, navigationOptions: {  headerShown: false  } },
    Customize: {  screen: Customize, navigationOptions: {  headerShown: false  } },
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
