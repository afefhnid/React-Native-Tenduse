import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

class Communaute extends Component {
  envoi() {
    let { navigation, data } = this.props;
    navigation.navigate("Envoi");
  }
  suivi() {
    let { navigation, data } = this.props;
    navigation.navigate("Suivi");
  }
  conseils() {
    let { navigation, data } = this.props;
    navigation.navigate("Conseils");
  } 
  communaute() {
    let { navigation, data } = this.props;
    navigation.navigate("Communaute");
  }
  render() {
    return (
      <ImageBackground
        style={{ flex: 1, width: null, height: null }}
      >
        <View
          style={{
            position: "relative",
            top: 45,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              marginTop: 0,
              fontWeight: "bold",
              color: "black",
              //fontFamily: "Comfortaa",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: 34,
              letterSpacing: "0.07em",
            }}
          >
            Notre communauté
          </Text>
          <Text
            style={{
              margin: "auto",
              color: "black",
            }}
          >
            “Trouvez-nous partout en france !!”
          </Text>
        </View>
        <TouchableOpacity onPress={() => this.envoi()}>
          <View
            style={{
              position: "absolute",
              top: 100,
              left: 25,
              height: 150,
              width: 150,
              backgroundColor: "#FBAA12",
            }}
          >
            <Image
              source={require("../assets/corse.jpg")}
              style={{ width: 147, height: 123, margin: "auto" }}
            />
            <Text
              style={{
                height: 25,
                textAlign: "center",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Corse
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.suivi()}>
          <View
            style={{
              position: "absolute",
              top: 100,
              left: 200,
              height: 150,
              width: 150,
              backgroundColor: "#FBAA12",
            }}
          >
            <Image
              source={require("../assets/iledefrance.jpg")}
              style={{ width: 147, height: 123, margin: "auto" }}
            />
            <Text
              style={{
                height: 25,
                textAlign: "center",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Ile-de-France
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.suivi()}>
        <View
          style={{
            position: "absolute",
            top: 270,
            left: 200,
            height: 150,
            width: 150,
            backgroundColor: "#FBAA12",
          }}
        >
          <Image
            source={require("../assets/bretagne.jpg")}
            style={{ width: 147, height: 123, margin: "auto" }}
          />
          <Text
            style={{
              height: 25,
              textAlign: "center",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Bretagne
          </Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.conseils()}>
        <View
        
          style={{
            position: "absolute",
            top: 270,
            left: 25,
            height: 150,
            width: 150,
            backgroundColor: "#FBAA12",
          }}
        >
          <Image
            source={require("../assets/hautfrance.jpg")}
            style={{ width: 147, height: 123, margin: "auto" }}
          />
          <Text
            style={{
              height: 25,
              textAlign: "center",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Hauts-de-France
          </Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.communaute()}>
        <View
          style={{
            position: "absolute",
            top: 435,
            left: 200,
            height: 150,
            width: 150,
            backgroundColor: "#FBAA12",
          }}
        >
          <Image
            source={require("../assets/normandie.jpg")}
            style={{ width: 147, height: 123, margin: "auto" }}
          />
          <Text
            style={{
              height: 25,
              textAlign: "center",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Normandie
          </Text>
        </View>
        </TouchableOpacity>
        <View
          style={{
            position: "absolute",
            top: 500,
            left: 25,
            height: 150,
            width: 150,
            backgroundColor: "#FBAA12",
          }}
        >
          <Image
            source={require("../assets/loire.jpg")}
            style={{ width: 147, height: 123, margin: "auto" }}
          />
          <Text
            style={{
              height: 25,
              textAlign: "center",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Pays de la Loire
          </Text>
        </View>
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

export default Communaute;
