import React, { Component } from "react";
import {
  Alert,
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { Button, Block, Input, Text } from "../components";
import { theme } from "../constants";

export default class Conseils extends Component {
  state = {
    email: null,
    username: null,
    password: null,
    errors: [],
    loading: false,
  };

  handleSignUp() {
    const { navigation } = this.props;
    const { email, username, password } = this.state;
    const errors = [];

    Keyboard.dismiss();
    this.setState({ loading: true });

    // check with backend API or with some static data
    if (!email) errors.push("email");
    if (!username) errors.push("username");
    if (!password) errors.push("password");

    this.setState({ errors, loading: false });

    if (!errors.length) {
      Alert.alert(
        "Success!",
        "Your account has been created",
        [
          {
            text: "Continue",
            onPress: () => {
              navigation.navigate("Browse");
            },
          },
        ],
        { cancelable: false }
      );
    }
  }
  Home() {
    let { navigation, data } = this.props;
    navigation.navigate("Home");
  }
  render() {
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = (key) => (errors.includes(key) ? styles.hasErrors : null);

    return (
      <View>
        <TouchableOpacity onPress={() => this.Home()} style={styles.header}>
          <Icon name={"chevron-left"} size={32} />
        </TouchableOpacity>

        <View style={{ display: "flex" }}>
          <Text style={styles.title}>Conseils</Text>
        </View>
        <KeyboardAvoidingView style={styles.signup} behavior="padding">
          <Block padding={[0, theme.sizes.base * 2]}>
            <Text h1 bold></Text>
            <Block middle>
              <Button
                gradient
                onPress={() => navigation.navigate("ShowConseils")}
              >
                {loading ? (
                  <ActivityIndicator size="small" color="white" />
                ) : (
                  <Text bold white center>
                    Show conseils
                  </Text>
                )}
              </Button>

              <Button onPress={() => navigation.navigate("Addconseil")}>
                {loading ? (
                  <ActivityIndicator size="small" color="white" />
                ) : (
                  <Text bold white center>
                    Add conseils
                  </Text>
                )}
              </Button>

              <Button gradient onPress={() => navigation.navigate("Customize")}>
                {loading ? (
                  <ActivityIndicator size="small" color="white" />
                ) : (
                  <Text bold white center>
                    Customize my profile
                  </Text>
                )}
              </Button>
              <Button onPress={() => navigation.navigate("Acceuil")}>
                <Text
                  gray
                  caption
                  center
                  style={{ textDecorationLine: "underline" }}
                >
                  Back
                </Text>
              </Button>
            </Block>
          </Block>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  signup: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent,
  },
  header: {
    position: "relative",
    top: 32,
    left: 8,
    paddingTop: 15,
  },
  title: {
    textAlign: "center",
    marginTop: 0,
    fontWeight: "bold",
    color: "black",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 34,
  },
});
