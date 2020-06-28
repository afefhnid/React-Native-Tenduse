import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button,
  Form,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Constants, BarCodeScanner } from "expo";
import * as Permissions from "expo-permissions";
import { Scan } from "../components/Scan";
class Envoi extends Component {
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

  send() {
    let { navigation, data } = this.props;
    navigation.navigate("Suivi");
  }
  details() {
    let { navigation, data } = this.props;
    navigation.navigate("Home");
  }
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.details()}
          style={{
            position: "relative",
            top: 32,
            left: 8,
            paddingTop: 15,
          }}
        >
          <Icon name={"chevron-left"} size={32} />
        </TouchableOpacity>

        <View style={{ display: "flex" }}>
          <Text
            style={{
              textAlign: "center",
              marginTop: 0,
              fontWeight: "bold",
              color: "black",
              // fontFamily: "Comfortaa",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: 34,
              //letterSpacing: "0.07em",
              //paddingRight: 85,
              //paddingLeft: 125,
            }}
          >
            Envoi
          </Text>
          {/*  <View style={styles.circle}>
            <Icon name={"user"} size={32} style={{ margin: "auto" }} />
          </View>* */}
        </View>

        <View style={styles.bodyEnvoi}>
          <Text style={styles.envoi}>Envoi</Text>
          <View style={{ paddingTop: 60 }}>
            <TextInput
              label="Identifiant"
              style={styles.inputText}
              placeholder="Taper votre code"
            ></TextInput>
            <Scan style={{ backgroundColor: "#fdc04e" }} />
            <TouchableOpacity
              style={styles.saveButton}
              onPress={() => {
                this.send();
              }}
            >
              <Text style={styles.saveButtonText}>Envoyer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
    color: "black",
    //fontFamily: "Comfortaa",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 34,
    //letterSpacing: "0.07em",
    //paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 20,
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
    backgroundColor: "#fdc04e",
  },
  saveButtonText: {
    color: "#60CD60",
    fontSize: 20,
    textAlign: "center",
  },
});

export default Envoi;
