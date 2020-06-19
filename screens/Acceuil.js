import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ImageBackground } from "react-native";

class Acceuil extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../assets/back.png")}
        style={{ flex: 1, width: null, height: null }}
      >
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        ></View>
        <View
          style={{
            position: "absolute",
            top: 100,
            left: 15,
            height: 150,
            width: 150,
            borderWidth: 1,
            backgroundColor: "#FBAA12",
          }}
        />
        <View
          style={{
            position: "absolute",
            top: 100,
            left: 200,
            height: 150,
            width: 150,
            borderWidth: 1,
            backgroundColor: "#FBAA12",
          }}
        />
        <View
          style={{
            position: "absolute",
            top: 280,
            left: 200,
            height: 150,
            width: 150,
            borderWidth: 1,
            backgroundColor: "#FBAA12",
          }}
        />
        <View
          style={{
            position: "absolute",
            top: 280,
            left: 15,
            height: 150,
            width: 150,
            borderWidth: 1,
            backgroundColor: "#FBAA12",
          }}
        />
        <View
          style={{
            position: "absolute",
            top: 460,
            left: 200,
            height: 150,
            width: 150,
            borderWidth: 1,
            backgroundColor: "#FBAA12",
          }}
        />
        <View
          style={{
            position: "absolute",
            top: 460,
            left: 15,
            height: 150,
            width: 150,
            borderWidth: 1,
            backgroundColor: "#FBAA12",
          }}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignSelf: "stretch",
    width: null,
  },
});

export default Acceuil;
