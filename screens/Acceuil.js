import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
class Acceuil extends Component {
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
  render() {
    return (
      <ImageBackground
        source={require("../assets/back.png")}
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
              color: "white",
              //fontFamily: "Comfortaa",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: 34,
              letterSpacing: "0.07em",
            }}
          >
            Accueil
          </Text>
          <Text
            style={{
              margin: "auto",
              color: "white",
            }}
          >
            “Embellissez-vous! Embellissez la planète !”
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
              source={require("../assets/send-message.png")}
              style={{ width: 80, height: 80, margin: "auto" }}
            />
            <Text
              style={{
                height: 25,
                textAlign: "center",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Envoi
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
              source={require("../assets/suivi.png")}
              style={{ width: 80, height: 80, margin: "auto" }}
            />
            <Text
              style={{
                height: 25,
                textAlign: "center",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Suivi
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
            source={require("../assets/pouss.png")}
            style={{ width: 80, height: 80, margin: "auto" }}
          />
          <Text
            style={{
              height: 25,
              textAlign: "center",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Suivi de la Poussée
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
            source={require("../assets/cons.png")}
            style={{ width: 80, height: 80, margin: "auto" }}
          />
          <Text
            style={{
              height: 25,
              textAlign: "center",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Conseils
          </Text>
        </View>
        </TouchableOpacity>
        <View
          style={{
            position: "absolute",
            top: 500,
            left: 200,
            height: 150,
            width: 150,
            backgroundColor: "#FBAA12",
          }}
        >
          <Image
            source={require("../assets/commun.png")}
            style={{ width: 80, height: 80, margin: "auto" }}
          />
          <Text
            style={{
              height: 25,
              textAlign: "center",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Communauté
          </Text>
        </View>
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
            source={require("../assets/taux.png")}
            style={{ width: 80, height: 80, margin: "auto" }}
          />
          <Text
            style={{
              height: 25,
              textAlign: "center",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Taux de remplissage
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

export default Acceuil;
