import React, { Component } from "react";
import {
  Alert,
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView
} from "react-native";

import { Button, Block, Input, Text } from "../components";
import { theme } from "../constants";

const VALID_EMAIL = "errahmani@gmail.com";
const NAME = "Errahmani";
const FIRST_NAME = "Asmaa"; 
const LOCATION = "Paris"; 

export default class Profil extends Component {
  state = {
    email: VALID_EMAIL,
    name: NAME,
    fname: FIRST_NAME,
    errors: [],
    loading: false,
    editing: null,
    profile: {},
    location: LOCATION
  };

  componentDidMount() {
    this.setState({ profile: this.props.profile });
  }

  handleEdit(name, text) {
    const { profile } = this.state;
    profile[name] = text;

    this.setState({ profile });
  }

  toggleEdit(name) {
    const { editing } = this.state;
    this.setState({ editing: !editing ? name : null });
  }

  renderEdit(name) {
    const { profile, editing } = this.state;

    if (editing === name) {
      return (
        <TextInput
          defaultValue={profile[name]}
          onChangeText={text => this.handleEdit([name], text)}
        />
      );
    }

    return <Text bold>{profile[name]}</Text>;
  }


  render() {
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);
    const { profile, editing } = this.state;


    return (
        <KeyboardAvoidingView style={styles.forgot} behavior="padding">

    <Block>
        <Block flex={false} row center margin={[80, 0]} space="between" style={styles.header}>
          <Text h1 bold>
           
          </Text>
        </Block>

        <ScrollView showsVerticalScrollIndicator={false}>
        <Block row space="between"  style={styles.inputRow}>
              <Block>
                <Text black style={{ marginLeft: 50 }}>
                  <bold> Fisrt name : </bold>{this.state.fname}
                </Text>
              </Block>
              <Text style={{ marginRight: 50 }}
                medium
                secondary
                onPress={() => this.toggleEdit("username")}
              >
                {editing === "username" ? "Save" : "Edit"}
              </Text>

              
        </Block>
        <Block row space="between" style={{ marginLeft: 50 }}  style={styles.inputRow}>
              <Block>
                <Text black style={{ marginLeft: 50 }}>
                <bold> Last name : </bold> {this.state.name}
                </Text>
              </Block>
              <Text style={{ marginRight: 50 }}
                medium
                secondary
                onPress={() => this.toggleEdit("username")}
              >
                {editing === "username" ? "Save" : "Edit"}
              </Text>
        </Block>
        <Block row space="between" style={{ marginLeft: 50 }}  style={styles.inputRow}>
              <Block>
                <Text black style={{ marginLeft: 50 }}>
                <bold> Location : </bold> {this.state.location}
                </Text>
              </Block>
              <Text style={{ marginRight: 50 }}
                medium
                secondary
                onPress={() => this.toggleEdit("username")}
              >
                {editing === "username" ? "Save" : "Edit"}
              </Text>
        </Block>
        
        

        </ScrollView>
        <Button margin={[80, 0]} onPress={() => navigation.navigate("Login")}>
            <Text
                gray
                caption
                center
            >
                Disconect
            </Text>
        </Button>
    </Block>
    </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  forgot: {
    flex: 1,
    justifyContent: "center"
  },
  inputRow: {
    alignItems: "flex-end"
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent
  }
});
