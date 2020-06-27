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
            Send
          </Text>
          {/*  <View style={styles.circle}>
            <Icon name={"user"} size={32} style={{ margin: "auto" }} />
          </View>* */}
        </View>

        <View style={styles.bodyEnvoi}>
          <Text style={styles.envoi}>Suivi</Text>
          <View>
            <Text style={styles.envoi}>Preparation</Text>
            <Image
              source={require("../assets/prp.png")}
              style={{
                width: 177,
                height: 133,
                margin: "auto",
                display: this.state.scanHidde,
              }}
            />
          </View>

          <View>
            <Text style={styles.envoi}>Expédition</Text>
            <Image
              source={require("../assets/exp.png")}
              style={{
                width: 177,
                height: 133,
                margin: "auto",
                display: this.state.scanHidde,
              }}
            />
          </View>
          <View>
            <Text style={styles.envoi}>Livraison</Text>
            <Image
              source={require("../assets/liv1.png")}
              style={{
                width: 177,
                height: 133,
                margin: "auto",
                display: this.state.scanHidde,
              }}
            />
          </View>
          <View>
            <Text style={styles.envoi}>Colis livré </Text>
            <Image
              source={require("../assets/liv.png")}
              style={{
                width: 177,
                height: 133,
                margin: "auto",
                display: this.state.scanHidde,
              }}
            />
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
    fontSize: 20,
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
  },
  saveButtonText: {
    color: "#60CD60",
    fontSize: 20,
    textAlign: "center",
  },
});

export default Suivi;
