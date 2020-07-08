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

class Suivi extends Component {
  state = {
    hasCameraPermission: null,
    lastScannedUrl: null,
    scan: "none",
  };

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === "granted",
    });
  };

  _handleBarCodeRead = (result) => {
    if (result.data !== this.state.lastScannedUrl) {
      LayoutAnimation.spring();
      this.setState({ lastScannedUrl: result.data });
    }
    this.setState({ scan: "none" });
  };

  details() {
    let { navigation, data } = this.props;
    navigation.navigate("SuiviDetails");
  }
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
          <Text style={styles.title}>Send</Text>
        </View>

        <View style={styles.bodyEnvoi}>
          <Text style={styles.suivi}>Suivi</Text>

          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <View>
              <Image
                source={require("../assets/i.png")}
                style={styles.imageI}
              />
              <View
                style={{
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  transform: [{ rotate: "-90deg" }],
                }}
              />
            </View>

            <View>
              <Text style={styles.envoi}>Preparation</Text>
              <Image
                source={require("../assets/prp.png")}
                style={styles.Image}
              />
            </View>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <View>
              <Image
                source={require("../assets/i.png")}
                style={styles.imageI}
              />
              <View
                style={{
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  transform: [{ rotate: "-90deg" }],
                }}
              />
            </View>
            <TouchableOpacity
              onPress={() => this.details()}
              style={styles.inpuitSend}
            >
              <View>
                <Text style={styles.envoi}>Expedition</Text>
                <Image
                  source={require("../assets/exp.png")}
                  style={styles.Image}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <View>
              <Image
                source={require("../assets/i2.png")}
                style={styles.imageI}
              />
              <View
                style={{
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  transform: [{ rotate: "-90deg" }],
                }}
              />
            </View>
            <View>
              <Text style={styles.envoi}>Livraison</Text>
              <Image
                source={require("../assets/liv1.png")}
                style={styles.Image}
              />
            </View>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <View>
              <Image
                source={require("../assets/i2.png")}
                style={styles.imageI}
              />
            </View>
            <View>
              <Text style={styles.envoi}>Colis livre </Text>
              <Image
                source={require("../assets/liv.png")}
                style={styles.Image}
              />
            </View>
          </View>
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

export default Suivi;