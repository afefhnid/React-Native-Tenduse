import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import * as Permissions from "expo-permissions";
import { Button, Block } from "../components";


class ShowConseils extends Component {
 
  Home() {
    let { navigation, data } = this.props;
    navigation.navigate("Home");
  }
  render() {
    return (
      <ScrollView>
        <TouchableOpacity onPress={() => this.Home()} style={styles.header}>
          <Icon name={"chevron-left"} size={32} />
        </TouchableOpacity>

        <View style={{ display: "flex" }}>
          <Text style={styles.title}>Conseils</Text>
        </View>
      </ScrollView>
      
    );
  }
}
const styles = StyleSheet.create({
  circle: {
    width: 50,
    height: 50,
    borderRadius: 100 / 2,
    backgroundColor: "#FDC04E",
  },
  bodyEnvoi: {
    backgroundColor: "#FDC04E",
    height: 1400,
  },
  envoi: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 20,
    lineHeight: 18,
    display: "flex",

    padding: 20,
  },
  inputText: {
    margin: 15,
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "white",
    textAlign: "center",
  },
  saveButton: {
    borderWidth: 1,
    borderColor: "#007BFF",
    backgroundColor: "white",
    padding: 15,
    margin: 5,
  },
  saveButtonText: {
    color: "#60CD60",
    fontSize: 20,
    textAlign: "center",
  },
  suivi: {
    fontWeight: "bold",
    color: "black",

    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 34,
    padding: 20,
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
  imageI: {
    width: 35,
    height: 35,
    margin: "auto",
  },
  Image: {
    width: 177,
    height: 133,
    margin: "auto",
  },
});

export default ShowConseils;