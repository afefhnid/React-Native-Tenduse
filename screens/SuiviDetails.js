import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import WebView from "react-native-webview";
import Icon from "react-native-vector-icons/FontAwesome";

class SuiviDetails extends Component {
  Home() {
    let { navigation, data } = this.props;
    navigation.navigate("Home");
  }
  render() {
    return (
      <>
        <TouchableOpacity
          onPress={() => this.Home()}
          style={{
            position: "relative",
            top: 32,
            left: 8,
            paddingTop: 15,
          }}
        >
          <Icon name={"chevron-left"} size={32} />
        </TouchableOpacity>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{ flex: 1 }}>
          <WebView
            source={{ uri: "https://www.laposte.fr/outils/suivre-vos-envois" }}
          />
        </SafeAreaView>
      </>
    );
  }
}
const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
});

export default SuiviDetails;
