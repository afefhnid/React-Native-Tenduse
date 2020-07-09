import React, { Component } from "react";
import {
  Alert,
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet
} from "react-native";

import { Button, Block, Input, Text } from "../components";
import { theme } from "../constants";

export default class Customize extends Component {
  state = {
    email: null,
    username: null,
    password: null,
    errors: [],
    loading: false
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
        "",
        "",
        [
          {
            text: "Continue",
            onPress: () => {
              navigation.navigate("");
            }
          }
        ],
        { cancelable: false }
      );
    }
  }

  render() {
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);

    return (
      <KeyboardAvoidingView style={styles.signup} behavior="padding">
        <Block padding={[0, theme.sizes.base * 2]}>
          <Text h1 bold>
            Customize profil
          </Text>
          <Block middle>
            
            <Input
              placeholder = "Nature of hair..."
              error={hasErrors("Nature of hair")}
              style={[styles.input, hasErrors("title")]}
              defaultValue={this.state.username}
              onChangeText={text => this.setState({ username: text })}
            />
            <Input
              email
              placeholder = "Style of cut"
              error={hasErrors("Style of cut")}
              style={[styles.input, hasErrors("content")]}
              defaultValue={this.state.email}
              onChangeText={text => this.setState({ email: text })}
            />

            <Input
              email
              placeholder = "Nature of growth"
              error={hasErrors("Nature of growth")}
              style={[styles.input, hasErrors("content")]}
              defaultValue={this.state.email}
              onChangeText={text => this.setState({ email: text })}
            />

            <Input
              email
              placeholder = "other"
              error={hasErrors("other")}
              style={[styles.input, hasErrors("content")]}
              defaultValue={this.state.email}
              onChangeText={text => this.setState({ email: text })}
            />
            
            
            
            <Button gradient onPress={() => this.handleSignUp()}>
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text bold white center>
                  Sumit
                </Text>
              )}
            </Button>

            <Button onPress={() => navigation.navigate("Conseils")}>
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
    );
  }
}

const styles = StyleSheet.create({
  signup: {
    flex: 1,
    justifyContent: "center"
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent
  }
});
