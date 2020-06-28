import React, { Component } from "react";
import {
  Alert,
  View,
  Text,
  Vibration,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

import * as Permissions from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Camera } from "expo-camera";
export class Scan extends Component {
  constructor(props) {
    super(props);

    this.onBarCodeRead = this.onBarCodeRead.bind(this);
    this.renderMessage = this.renderMessage.bind(this);
    this.scannedCode = null;

    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
      scan: "none",
      scanHidde: "block",
    };
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    await this.setState({ hasCameraPermission: status === "granted" });
    await this.resetScanner();
  }

  renderAlert(title, message) {
    Alert.alert(
      title,
      message,
      [{ text: "OK", onPress: () => this.resetScanner() }],
      { cancelable: true }
    );
  }

  onBarCodeRead({ type, data }) {
    if (
      (type === this.state.scannedItem.type &&
        data === this.state.scannedItem.data) ||
      data === null
    ) {
      return;
    }

    Vibration.vibrate();
    this.setState({ scannedItem: { data, type } });

    if (type.startsWith("org.gs1.EAN")) {
      // Do something for EAN
      console.log(`EAN scanned: ${data}`);
      this.resetScanner();
      this.props.navigation.navigate("YOUR_NEXT_SCREEN", { ean: data });
    } else if (type.startsWith("org.iso.QRCode")) {
      // Do samething for QRCode
      console.log(`QRCode scanned: ${data}`);
      this.resetScanner();
    } else {
      this.renderAlert("This barcode is not supported.", `${type} : ${data}`);
    }
  }

  renderMessage() {
    if (this.state.scannedItem && this.state.scannedItem.type) {
      const { type, data } = this.state.scannedItem;
      return (
        <Text style={styles.scanScreenMessage}>
          {`Scanned \n ${type} \n ${data}`}
        </Text>
      );
    }
    return (
      <Text style={styles.scanScreenMessage}>Focus the barcode to scan.</Text>
    );
  }

  resetScanner() {
    this.scannedCode = null;
    this.setState({
      scannedItem: {
        type: null,
        data: null,
      },
    });
    this.setState({ scan: "none" });
    this.setState({ scanHidde: "flex" });
  }
  scan() {
    this.setState({ scan: "flex" });
    console.log(this.state.scan);
    this.setState({ scanHidde: "none" });
  }
  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View
        style={{
          flex: 1,
          paddingTop: 15,

          backgroundColor: "#fdc04e",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            this.scan();
          }}
          style={{ padding: 30 }}
        >
          <Image
            source={require("../assets/scan.jpg")}
            style={{
              width: 80,
              height: 80,
              margin: "auto",
              display: this.state.scanHidde,
            }}
          />
        </TouchableOpacity>
        <View style={{ flex: 1, display: this.state.scan }}>
          <BarCodeScanner
            onBarCodeScanned={this.onBarCodeRead}
            style={StyleSheet.absoluteFill}
          />
          {this.renderMessage()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  scanScreenMessage: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
